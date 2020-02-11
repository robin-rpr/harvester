var config = new Config();
var store;
config.loadConfiguration(function () {
	console.log("initial configuration", config);
	store = new Store(config);
});

chrome.storage.onChanged.addListener(function () {
	config.loadConfiguration(function () {
		console.log("configuration changed", config);
		store = new Store(config);
	});
});

var sendToActiveTab = function(request, callback) {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		if (tabs.length < 1) {
			this.console.log("couldn't find active tab");
		}
		else {
			var tab = tabs[0];
			chrome.tabs.sendMessage(tab.id, request, callback);
		}
	});
};

var currentChildURLs=null;

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {

		console.log("chrome.runtime.onMessage", request);

		if (request.setCurrentChildURLs) {
			currentChildURLs=request.urls;
			sendResponse(request);
			return true;
		}else if (request.getCurrentChildURLs) {
			request.urls=currentChildURLs;
			sendResponse(request);
			return true;
		}else if (request.createSitemap) {
			store.createSitemap(request.sitemap, sendResponse);
			return true;
		}
		else if (request.saveSitemap) {
			store.saveSitemap(request.sitemap, sendResponse);
			return true;
		}
		else if (request.deleteSitemap) {
			store.deleteSitemap(request.sitemap, sendResponse);
			return true;
		}
		else if (request.getAllSitemaps) {
			store.getAllSitemaps(sendResponse);
			return true;
		}
		else if (request.sitemapExists) {
			store.sitemapExists(request.sitemapId, sendResponse);
			return true;
		}else if (request.findSitemap) {
			store.findSitemap(request.sitemapId, sendResponse);
			return true;
		}
		else if (request.getSitemapData) {
			store.getSitemapData(new Sitemap(request.sitemap), sendResponse);
			store.getSitemapData(new Sitemap(request.sitemap), sendResponse);
			return true;
		}
		else if (request.scrapeSitemap) {//TODO
			var sitemap = new Sitemap(request.sitemap);
			var queue = new Queue();
			var browser = new ChromePopupBrowser({
				pageLoadDelay: request.pageLoadDelay,
				scrollToBottom: request.scrollToBottom,
				urls: sitemap.getStartUrls()
			});

			var scraper = new Scraper({
				queue: queue,
				sitemap: sitemap,
				browser: browser,
				store: store,
				requestInterval: request.requestInterval
			});

			try {
				const callback = function(){
					//browser.close();
					var notification = chrome.notifications.create("scraping-finished", {
						type: 'basic',
						iconUrl: 'assets/images/icon128.png',
						title: 'Scraping finished!',
						message: 'Finished scraping ' + sitemap._id
					}, function(id) {
						// notification showed
					});
					sendResponse();
				}

				const finalize = function(finalResult){
					store.removeDuplicate(sitemap._id, request.distinct, finalResult);
					callback();
				}

				scraper.run(finalize);
			}
			catch (e) {
				console.log("Scraper execution cancelled".e);
			}

			return true;
		}
		else if(request.previewSelectorData) {
			chrome.tabs.query({
				active: true,
				currentWindow: true
			}, function (tabs) {
				if (tabs.length < 1) {
					this.console.log("couldn't find active tab");
				}
				else {
					var tab = tabs[0];
					chrome.tabs.sendMessage(tab.id, request, sendResponse);
				}
			});
			return true;
		}
		else if(request.backgroundScriptCall) {

			var backgroundScript = getBackgroundScript("BackgroundScript");
			var deferredResponse = backgroundScript[request.fn](request.request)
			deferredResponse.done(function(response){
				sendResponse(response);
			});

			return true;
		}
	}
);
