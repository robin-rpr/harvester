var MySQLDB = function(restfulAddr, sitemapTable){
    this.url = restfulAddr;
    this.sitemapTable = sitemapTable;
}

MySQLDB.prototype = {
    ADD: function(data) {
        delete data.code;
        delete data.id;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${this.url}/${this.sitemapTable}`,
                type: "POST",
                data: data,
                success: function(response){
                    if(response.success){
                        resolve(Object.assign(data, {code: "add"}));
                    }else{
                        reject(Object.assign(response, {code: "add_error"}));
                    }
                },
                error: r => alert(JSON.stringify(r))
            });
        });
    },
    READ: function(field) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${this.url}/${this.sitemapTable}?field=${field}`,
                type: "GET",
                success: function(response){
                    resolve(Object.assign(response, {code: "read"}));
                },
                error: r => alert(JSON.stringify(r))
            });
        });
    },
    GET: function(data) {
        let sitemapid = data.sitemapid;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${this.url}/${this.sitemapTable}/sitemapid/${sitemapid}`,
                type: "GET",
                success: function(response){
                    if(response.error){
                        reject(Object.assign(data, {code: "get_error"}));
                    }else{
                        resolve({
                            code: "get",
                            content: response[0].content,
                            data: response[0].data,
                            sitemapid: sitemapid,
                            id: response[0].id
                        });
                    }
                },
                error: r => alert(JSON.stringify(r))
            });
        });
    },
    UPDATE: function(data) {
        let param = "";
        let dataType = "";
        let id = "";

        if(data.json){
            dataType = "json";
            id = `sitemapid/${data.sitemapid}`;
            delete data.json;
            delete data.sitemapid;
        }else{
            id = data.id;
        }
        delete data.code;

        if(!data.data){
            data.data = "[]";
        }

        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${this.url}/${this.sitemapTable}/${id}`,
                type: "PUT",
                data: data,
                dataType: dataType,
                success: response => {
                    if(response.error){
                        reject(Object.assign(data, {code:"update_error", response}));
                    }else{
                        resolve(Object.assign(data, {code:"update", response}));
                    }
                },
                error: r => alert(JSON.stringify(r))
            });
        });
    },
    DELETE: function(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${this.url}/${this.sitemapTable}/${id}`,
                type: "DELETE",
                success: response => {
                    if(response.error){
                        reject({code:"delete_error", response, id});
                    }else{
                        resolve({code:"delete", response, id});
                    }
                },
                error: r => alert(JSON.stringify(r))
            });
        });
    },
    remove: function(sitemap) {
        return this.GET(Object.assign(sitemap, {sitemapid: sitemap._id})).then(r => this.DELETE(r.id));
    },
    saveOrUpdate: function(data) {
        return this.GET(data).then(r => this.UPDATE(Object.assign(r, {content: data.content || r.content, data: data.data || r.data}))).catch(r => this.ADD(r));
    }
}

var Store = function (config) {
    this.config = config;
    if(this.config.storageType == "mysql"){
        this.mysqlDB = new MySQLDB(this.config.mysqlDB, this.config.mysqlSitemap);
    }else{
        // configure couchdb
        this.sitemapDb = new PouchDB(this.config.sitemapDb);
    }
};

var StoreScrapeResultWriter = function(db, type, sitemapid) {
    this.db = db;
    this.type = type;
    this.sitemapid = sitemapid;
};

StoreScrapeResultWriter.prototype = {
    writeDocs: function(docs, callback) {
        if(docs.length === 0) {
            callback();
        }
        else if(this.type == "mysql") {
            const updateData = async function() {
                let sitemapid = this.sitemapid;
                let json = "json";
                let data = {content: JSON.stringify(docs).replace(/\\n/ig,"").replace(/\\r/ig,""), field: "data"};
                let result = await this.db.UPDATE({json, data, sitemapid});
                return Promise.resolve(result);
            }.bind(this);

            updateData().then(callback);
        }else {
            this.db.bulkDocs({docs:docs}, function(err, response) {
                if(err !== null) {
                    console.log("Error while persisting scraped data to db", err);
                }
                callback();
            });
        }
    }
};

Store.prototype = {
    sanitizeSitemapDataDbName: function(dbName) {
        return 'sitemap-data-' + dbName.replace(/[^a-z0-9_\$\(\)\+\-/]/gi, "_");
    },
    getSitemapDataDbLocation: function(sitemapId) {
        var dbName = this.sanitizeSitemapDataDbName(sitemapId);
        return this.config.dataDb + dbName;
    },
    getSitemapDataDb: function(sitemapId) {
        var dbLocation = this.getSitemapDataDbLocation(sitemapId);
        if(this.config.storageType == "mysql") {
            return new MySQLDB(this.config.mysqlDB, this.config.mysqlSitemap);
        }else{
            return new PouchDB(dbLocation);
        }
    },
    
    /**
     * creates or clears a sitemap db
     * @param {type} sitemapId
     * @returns {undefined}
     */
    initSitemapDataDb: function(sitemapId, callback) {
        var dbLocation = this.getSitemapDataDbLocation(sitemapId);
        var store = this;
        if(this.config.storageType == "mysql") {
            var db = store.getSitemapDataDb(sitemapId);
            var dbWriter = new StoreScrapeResultWriter(db, "mysql", sitemapId);
            callback(dbWriter);
        }else{
            PouchDB.destroy(dbLocation, function() {
                var db = store.getSitemapDataDb(sitemapId);
                var dbWriter = new StoreScrapeResultWriter(db);
                callback(dbWriter);
            });
        }
    },

    createSitemap: function (sitemap, callback) {
        var sitemapJson = JSON.parse(JSON.stringify(sitemap));
        if(!sitemap._id) {
            console.log("cannot save sitemap without an id", sitemap);
        }
        if(this.config.storageType == "mysql") {
            const handler = async function(){
                let data = {
                    id: null, 
                    sitemapid: sitemapJson._id,
                    content: JSON.stringify(sitemapJson)
                };

                let result = await this.mysqlDB.saveOrUpdate(data);

                let sitemap = JSON.parse(result.content);
                switch (result.code) {
                    case "get_error":
                        sitemap._rev = `rev_${Date.now()}`;
                        break;
                    case "get":
                        break;
                }
                return Promise.resolve(sitemap);
            }.bind(this);
            handler().then(callback);
        }else{
            this.sitemapDb.put(sitemapJson, function(sitemap, err, response) {
                sitemap._rev = response.rev;
                callback(sitemap);
            }.bind(this, sitemap));
        }
    },
    saveSitemap: function (sitemap, callback) {
        // @TODO remove
        this.createSitemap(sitemap, callback);
    },
    deleteSitemap: function (sitemap, callback) {
        sitemap = JSON.parse(JSON.stringify(sitemap));
        var _this = this;
        this.findSitemap(sitemap._id, function(_sitemap){
            if(!_sitemap) return;
            if(_this.config.storageType == "mysql"){
                _this.mysqlDB.remove(sitemap).then(callback);
            }else{
                _this.sitemapDb.remove(_sitemap, function(err, response){
                    var dbLocation = _this.getSitemapDataDbLocation(_sitemap._id);
                        PouchDB.destroy(dbLocation, function() {
                        callback();
                    }.bind(this));
            }.bind(this));}
        });
    },
    getAllSitemaps: function (callback) {
        if(this.config.storageType == "mysql"){
            const setupSitemap = response => {
                let sitemaps = (response.error ? [] : response).map(r => JSON.parse(r.content)).map(s => chrome.extension ? s : new Sitemap(s));
                callback(sitemaps);
            }
            this.mysqlDB.READ("content").then(setupSitemap);
        }else{
            this.sitemapDb.allDocs({include_docs: true}, function(err, response) {
                var sitemaps = [];
                for (var i in response.rows) {
                    var sitemap = response.rows[i].doc;
                    if (!chrome.extension) {
                        sitemap = new Sitemap(sitemap);
                    }
                    sitemaps.push(sitemap);
                }
                callback(sitemaps);
            });
        }
    },
    findSitemap: function (sitemapId, callback) {
        this.getAllSitemaps(function (sitemaps) {
            var sitemapFound = false;
            for (var i in sitemaps) {
                if (sitemaps[i]._id === sitemapId) {
            callback(sitemaps[i]);
            return;
                }
            }
            callback(sitemapFound);
        });
    },
    findSimilar: function (sitemapId, callback) {
        this.getAllSitemaps(function (sitemaps) {
            var sitemapFound = false;
        var count=0;    
            for (var i in sitemaps) {
        var common=sharedStart([sitemaps[i]._id,sitemapId]);
        if(count<common.length) {
            count=common.length;
            sitemapFound=sitemaps[i];
                }
            }
        callback(sitemapFound);
        });
    },
    getSitemapData: function (sitemap, callback) {
        if(this.config.storageType == "mysql"){
            var db = this.getSitemapDataDb(sitemap._id);
            const setupSitemapData = response => {
                let responseData = (response.error ? [] : JSON.parse(response.data));
                callback(responseData);
            }
            db.GET({sitemapid: sitemap._id}).then(setupSitemapData);
        }else{
            var db = this.getSitemapDataDb(sitemap._id);
            db.allDocs({include_docs: true}, function(err, response) {
                var responseData = [];
                for (var i in response.rows) {
                    var doc = response.rows[i].doc;
                    responseData.push(doc);
                }
                callback(responseData);
            });
        }
    },
    // @TODO make this call lighter
    sitemapExists: function (sitemapId, callback) {
        this.getAllSitemaps(function (sitemaps) {
            var sitemapFound = false;
            for (var i in sitemaps) {
                if (sitemaps[i]._id === sitemapId) {
                    sitemapFound = true;
                }
            }
            callback(sitemapFound);
        });
    },
    removeDuplicate: async function(sitemapid, distinct){
        if(distinct != "true"){
            return Promise.resolve({distinct});
        }else{
            distinct = "PATCH";

            const  toSortedJSON = function(obj) {
                return JSON.stringify(typeof obj == "object" ? Object.keys(obj).sort().reduce((o, key) => (o[key] = toSortedJSON(obj[key]), o), {}) : obj);
            }

            const uniq = function(xs) {
                let seen = {};
                return xs.filter(x => (k = (toSortedJSON || JSON.stringify)(x), !(k in seen) && (seen[k] = 1)));
            }

            let db = this.getSitemapDataDb(sitemapid);
            let response = await db.GET({sitemapid});

            let content = JSON.stringify(uniq(JSON.parse(response.data)));

            let json = "json";
            let field = "data";
            let data = {content, field, distinct};

            let result = await db.UPDATE({json, data, sitemapid});

            return Promise.resolve(Object.assign(result, {distinct}));
        }
    }
};

function sharedStart(array){
    var A= array.concat().sort(), 
    a1= A[0], a2= A[A.length-1], L= a1.length, i= 0;
    while(i<L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
}