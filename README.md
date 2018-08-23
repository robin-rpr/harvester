# Web Scraper Plus
Web Scraper Plus is a chrome browser extension built for data extraction from web 
pages. Using this extension you can create a plan (sitemap) how a web site 
should be traversed and what should be extracted. Using these sitemaps the 
Web Scraper will navigate the site accordingly and extract all data. Scraped 
data later can be exported as CSV.

Install the extension from [chrome-store]

Document for new features: [wiki]

#### This tool is forked form [Web-Scraper] with many more features

### New Features
 1. [CLI Support]: Start scraping from CMD/Terminal
 2. [MySQL Support]: Support MySQL database (v5.7+)
 3. [Anti Lazy-Loading]: Anti Lazy-Loading feature on pages
 4. [Data Filter]: Support user defined JS code for data preprocess and much more
 5. [Distinct]: Remove dulplicate data before the end of every task.
 6. [Custom Columns]: Define the columns you want to display, please use this feature together with [Data Filter]
 7. [Easy Scrape]: Create & scrape sitemap in a more easily way. (By https://github.com/aagiss)
 8. Random Interval: Add a random delay between requests. (By https://github.com/Euphorbium)

### Features(Forked from original work)

 1. Scrape multiple pages
 2. Sitemaps and scraped data are stored in browsers local storage or in CouchDB
 3. Multiple data selection types
 4. Extract data from dynamic pages (JavaScript+AJAX)
 5. Browse scraped data
 6. Export scraped data as CSV
 7. Import, Export sitemaps
 8. Depends only on Chrome browser

### Help

 Basic documentation and tutorials are available on [webscraper.io]
 
 Submit bugs and suggest features on [github-issues]
 
#### Bugs
When submitting a bug please attach an exported sitemap if possible.

## License
LGPLv3

 [Web-Scraper]: https://github.com/martinsbalodis/web-scraper-chrome-extension
 [chrome-store]: https://chrome.google.com/webstore/detail/pbbfbmlnpackgeofecdfncmmdbodkhma
 [webscraper.io]: http://webscraper.io/
 [github-issues]: https://github.com/hejiheji001/web-scraper-chrome-extension/issues
 [wiki]: https://github.com/hejiheji001/web-scraper-chrome-extension/wiki
[MySQL Support]: https://github.com/hejiheji001/web-scraper-chrome-extension/wiki/MySQL-Support

[CLI Support]: https://github.com/hejiheji001/web-scraper-chrome-extension/wiki/CLI-Support

[Anti Lazy-Loading]: https://github.com/hejiheji001/web-scraper-chrome-extension/wiki/Anti-Lazy-Loading

[Data Filter]: https://github.com/hejiheji001/web-scraper-chrome-extension/wiki/Data-Filter

[Distinct]: https://github.com/hejiheji001/web-scraper-chrome-extension/wiki/Distinct

[Custom Columns]: https://github.com/hejiheji001/web-scraper-chrome-extension/wiki/Custom-Columns

[Easy Scrape]: https://github.com/hejiheji001/web-scraper-chrome-extension/wiki/Easy-Scrape
