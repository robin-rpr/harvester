window.runTask = function () {
	var query =	location.search;
	if (query.indexOf("run") > -1) {
		var id = getQueryString("run");
		var anti = getQueryString("anti");
		var dom = $($("#sitemaps").find("td").get().filter(s => s.innerHTML == id));
		dom.click();
		controller.showScrapeSitemapConfigPanel();
		$("#scrollToBottom").val(anti);
		controller.scrapeSitemap();
	}
}

function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 