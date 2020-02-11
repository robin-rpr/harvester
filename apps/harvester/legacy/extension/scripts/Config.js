var Config = function () {

};

Config.prototype = {

	sitemapDb: '<use loadConfiguration()>',
	dataDb: '<use loadConfiguration()>',
	mysqlDB: '<use loadConfiguration()>',
	defaultSitemap: '<use loadConfiguration()>',

	defaults: {
		storageType: "local",
		// this is where sitemap documents are stored
		sitemapDb: "scraper-sitemaps",
		// this is where scraped data is stored.
		// empty for local storage
		dataDb: "",
		defaultSitemap:'{"selectors": [{"id": "title","parentSelectors": ["_root"],"type": "SelectorText","multiple": false,"selector": "h1" }, { "id": "photo", "parentSelectors": ["_root"], "type": "SelectorImage", "multiple": false, "selector": "img" }, { "id": "date", "parentSelectors": ["_root"], "type": "SelectorText", "multiple": false,"selector": "time" }, { "id": "descr", "parentSelectors": ["_root"], "type": "SelectorText", "multiple": true, "selector": "p"}]}',
		mysqlDB: "http://",
		mysqlSitemap: "sitemap"
	},

	/**
	 * Loads configuration from chrome extension sync storage
	 */
	loadConfiguration: function (callback) {

		chrome.storage.sync.get(['sitemapDb', 'dataDb', 'storageType', 'mysqlDB', 'defaultSitemap'], function (items) {
			this.storageType = items.storageType || this.defaults.storageType;
			this.defaultSitemap= items.defaultSitemap || this.defaults.defaultSitemap;
			if (this.storageType === 'local') {
				this.sitemapDb = this.defaults.sitemapDb;
				this.dataDb = this.defaults.dataDb;
			}
			else if(this.storageType === 'couchdb') {
				this.sitemapDb = items.sitemapDb || this.defaults.sitemapDb;
				this.dataDb = items.dataDb || this.defaults.dataDb;
			}else if(this.storageType === 'mysql'){
				this.mysqlDB = items.mysqlDB || this.defaults.mysqlDB;
				this.dataDb = this.defaults.dataDb;
				this.mysqlSitemap = items.mysqlSitemap || this.defaults.mysqlSitemap;
			}else {
				this.sitemapDb = items.sitemapDb || this.defaults.sitemapDb;
				this.dataDb = items.dataDb || this.defaults.dataDb;
				this.mysqlSitemap = items.mysqlSitemap || this.defaults.mysqlSitemap;
			}

			callback();
		}.bind(this));
	},

	/**
	 * Saves configuration to chrome extension sync storage
	 * @param {type} items
	 * @param {type} callback
	 * @returns {undefined}
	 */
	updateConfiguration: function (items, callback) {
		chrome.storage.sync.set(items, callback);
	}
};