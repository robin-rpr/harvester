Scraper = function (options) {
	this.queue = options.queue;
	this.sitemap = options.sitemap;
	this.store = options.store;
	this.store.browser = options.browser;
	this.browser = options.browser;
	this.resultWriter = null; // db instance for scraped data writing
	this.requestInterval = parseInt(options.requestInterval);
	this.requestIntervalRandomness = parseInt(options.requestIntervalRandomness);
	this.pageLoadDelay = parseInt(options.pageLoadDelay);
	this.size = 0;
	this.current = 0;
	this.resultLength = 0;
	this.urls = [];
};

Scraper.prototype = {

	/**
	 * Scraping delay between two page opening requests
	 */
	requestInterval: 2000,
	_timeNextScrapeAvailable: 0,

	initFirstJobs: function () {
		this.urls = this.sitemap.getStartUrls();
		this.size = this.urls.length;
		this.urls.forEach(function (url) {
			var firstJob = new Job(url, "_root", this);
			this.queue.add(firstJob);
		}.bind(this));
	},

	run: function (executionCallback) {
		var scraper = this;

		// callback when scraping is finished
		this.executionCallback = executionCallback;

		this.initFirstJobs();

		this.store.initSitemapDataDb(this.sitemap._id, function (resultWriter) {
			scraper.resultWriter = resultWriter;
			scraper._run();
		});
	},

	recordCanHaveChildJobs: function (record) {
		if (record._follow === undefined) {
			return false;
		}

		var selectorId = record._followSelectorId;
		var childSelectors = this.sitemap.getDirectChildSelectors(selectorId);
		if (childSelectors.length === 0) {
			return false;
		}
		else {
			return true;
		}
	},

	getFileFilename: function(url) {

		var parts = url.split("/");
		var filename = parts[parts.length-1];
		filename = filename.replace(/\?/g, "");
		if(filename.length > 130) {
			filename = filename.substr(0, 130);
		}
		return filename;
	},

	/**
	 * Save images for user if the records contains them
	 * @param record
	 */
	saveImages: function(record) {

		var deferredResponse = $.Deferred();
		var deferredImageStoreCalls = [];
		var prefixLength = "_imageBase64-".length;

		for(var attr in record) {
			if(attr.substr(0, prefixLength) === "_imageBase64-") {
				var selectorId = attr.substring(prefixLength, attr.length);
				deferredImageStoreCalls.push(function(selectorId) {

					var imageBase64 = record['_imageBase64-'+selectorId];
					var deferredDownloadDone = $.Deferred();

					var deferredBlob = Base64.base64ToBlob(imageBase64, record['_imageMimeType-'+selectorId]);

					delete record['_imageMimeType-'+selectorId];
					delete record['_imageBase64-'+selectorId];

					deferredBlob.done(function(blob) {

						var downloadUrl =  window.URL.createObjectURL(blob);
						var fileSavePath = this.sitemap._id+'/'+selectorId+'/'+this.getFileFilename(record[selectorId+'-src']);

						// download image using chrome api
						var downloadRequest = {
							url: downloadUrl,
							filename: fileSavePath
						};

						// wait for the download to finish
						chrome.downloads.download(downloadRequest, function(downloadId) {
							var cbDownloaded = function(downloadItem) {
								if(downloadItem.id === downloadId && downloadItem.state) {
									if(downloadItem.state.current === "complete") {
										deferredDownloadDone.resolve();
										chrome.downloads.onChanged.removeListener(cbDownloaded);
									}
									else if(downloadItem.state.current === "interrupted") {
										deferredDownloadDone.reject("download failed");
										chrome.downloads.onChanged.removeListener(cbDownloaded);
									}
								}
							};

							chrome.downloads.onChanged.addListener(cbDownloaded);
						});
					}.bind(this));

					return deferredDownloadDone.promise();

				}.bind(this, selectorId));
			}
		}

		$.whenCallSequentially(deferredImageStoreCalls).done(function() {
			deferredResponse.resolve();
		});

		return deferredResponse.promise();
	},

	// @TODO remove recursion and add an iterative way to run these jobs.
	_run: function (tempDoc) {
		var jobs = this.queue.getJobs();
		var job = jobs.pop();
		if(job && this.urls.indexOf(job.url) > -1 && this.current == this.size - jobs.length - 1){
			job.execute(this.browser, function (job) {
				var scrapedRecords = [];
				var deferredDatamanipulations = [];

				var records = job.getResults();
				if(records.length > 0){
					records.forEach(function (record) {
						deferredDatamanipulations.push(this.saveImages.bind(this, record));
						if (this.recordCanHaveChildJobs(record)) {
							var followSelectorId = record._followSelectorId;
							var followURL = record['_follow'];
							var followSelectorId = record['_followSelectorId'];
							delete record['_follow'];
							delete record['_followSelectorId'];
							var newJob = new Job(followURL, followSelectorId, this, job, record);
							if (this.queue.canBeAdded(newJob)) {
								this.queue.add(newJob);
							}
							else {
								console.log("Ignoring next")
								console.log(record);
							}
						}
						else {
							if (record._follow !== undefined) {
								delete record['_follow'];
								delete record['_followSelectorId'];
							}
							scrapedRecords.push(record);
						}
					}.bind(this));

					$.whenCallSequentially(deferredDatamanipulations).done(function() {
						this.resultWriter.writeDocs(scrapedRecords, function (tempDoc) {
							const toSortedJSON = function(obj) {
				                return JSON.stringify(typeof obj == "object" ? Object.keys(obj).sort().reduce((o, key) => (o[key] = toSortedJSON(obj[key]), o), {}) : obj);
				            }

				            const uniq = function(xs) {
				                let seen = {};
				                return xs.filter(x => (k = (toSortedJSON || JSON.stringify)(x), !(k in seen) && (seen[k] = 1)));
				            }

				            try{
				            	tempDoc = uniq(tempDoc);
				            }catch(e){
				            	console.log(e);
				            }
				            if(this.resultLength == 0 || tempDoc.length > this.resultLength){
				            	this.resultLength = tempDoc ? tempDoc.length : 0;
				            	this.current++;
				            	var now = (new Date()).getTime();
				            	this._timeNextScrapeAvailable = now + this.requestInterval + Math.random()*this.requestIntervalRandomness;
				            	if(now >= this._timeNextScrapeAvailable) {
				            		this._run(tempDoc);
				            	}else{
				            		var delay = this._timeNextScrapeAvailable - now;
				            		setTimeout(function() {
				            			this._run(tempDoc);
				            		}.bind(this), delay);
				            	}
				            }
						}.bind(this));
					}.bind(this));
				}else{
					this.current++;
					var now = (new Date()).getTime();
	            	this._timeNextScrapeAvailable = now + this.requestInterval + Math.random()*this.requestIntervalRandomness;
	            	if(now >= this._timeNextScrapeAvailable) {
	            		this._run(tempDoc);
	            	}else{
	            		var delay = this._timeNextScrapeAvailable - now;
	            		setTimeout(function() {
	            			this._run(tempDoc);
	            		}.bind(this), delay);
	            	}
				}
			}.bind(this));
		}else if (this.current === this.size) {
			this.browser.sendNotification(tempDoc.length);
			this.executionCallback(tempDoc);
			return;
		}else{
			this._run(tempDoc);
		}
	}
};
