$(function () {

	// popups for Storage setting input fields
	$("#sitemapDb")
		.popover({
			title: 'Database for sitemap storage',
			html: true,
			content: "CouchDB database url<br /> http://example.com/scraper-sitemaps/",
			placement: 'bottom'
		})
		.blur(function () {
			$(this).popover('hide');
		});

	$("#dataDb")
		.popover({
			title: 'Database for scraped data',
			html: true,
			content: "CouchDB database url. For each sitemap a new DB will be created.<br />http://example.com/",
			placement: 'bottom'
		})
		.blur(function () {
			$(this).popover('hide');
		});

	$("#mysqlDB")
		.popover({
			title: 'Database for scraped data',
			html: true,
			content: "Restful MySQL Server.<br />",
			placement: 'bottom'
		})
		.blur(function () {
			$(this).popover('hide');
		});

	$("#mysqlSitemap")
		.popover({
			title: 'Table for Sitemap',
			html: true,
			content: "Sitemap for MySQL Database<br />",
			placement: 'bottom'
		})
		.blur(function () {
			$(this).popover('hide');
		});

	// switch between configuration types
	$("select[name=storageType]").change(function () {
		var type = $(this).val();
		$(".form-group").not(".controller").hide();
		$(".form-group." + type).show();
	});

	// Extension configuration
	var config = new Config();

	// load previously synced data
	config.loadConfiguration(function () {
		var type = config.storageType;
		$("#storageType").val(type);
		
		if(type === 'mysql'){
			$("#mysqlDB").val(config.mysqlDB);
			$("#mysqlSitemap").val(config.mysqlSitemap);
		}else{
			$("#dataDb").val(config.dataDb);
			$("#sitemapDb").val(config.sitemapDb);
		}
		$("#defaultSitemap").val(JSON.stringify(JSON.parse(config.defaultSitemap),null,'\t'));
		$("select[name=storageType]").change();
	});

	// Sync storage settings
	$("form#storage_configuration").submit(function () {

		var sitemapDb = $("#sitemapDb").val();
		var dataDb = $("#dataDb").val();
		var storageType = $("#storageType").val();
		var defaultSitemap = JSON.stringify(JSON.parse($("#defaultSitemap").val()));
		var mysqlDB = $("#mysqlDB").val();
		var mysqlSitemap = $("#mysqlSitemap").val();

		var newConfig;

		if (storageType === 'local') {
			newConfig = {
				storageType: storageType,
				sitemapDb: ' ',
				dataDb: ' ',
				defaultSitemap: defaultSitemap
			}
		}
		else if(storageType === 'mysql'){
			newConfig = {
				storageType: storageType,
				mysqlDB: mysqlDB,
				mysqlSitemap: mysqlSitemap,
				defaultSitemap: defaultSitemap
			}
		}else if(storageType === 'couchdb'){
			newConfig = {
				storageType: storageType,
				sitemapDb: sitemapDb,
				dataDb: dataDb,
				defaultSitemap: defaultSitemap
			}
		}
		console.log(newConfig);
		config.updateConfiguration(newConfig);
		return false;
	});
});