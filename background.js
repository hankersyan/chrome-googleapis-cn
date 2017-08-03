chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var url = details.url;
    if (url.indexOf("ajax.googleapis.com/ajax/libs/jquery") != -1) {
    	// baidu cdn 不支持 jQuery 1.12.4
	var newUrl = url.replace(/ajax\.googleapis\.com\/ajax\/libs/, 'cdnjs.cloudflare.com/ajax/libs');
	return {
		redirectUrl: newUrl
	};
    }
    return true;
  }, {
    urls: ["<all_urls>"]
  }, //监听所有的url,你也可以通过*来匹配。
  ["blocking"]
);
