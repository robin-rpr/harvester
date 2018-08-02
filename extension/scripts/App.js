$(function () {

	// init bootstrap alerts
	$(".alert").alert();

	var store = new StoreDevtools();
	window.controller = new SitemapController({
		store: store,
		templateDir: 'views/'
	});
});