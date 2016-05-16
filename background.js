chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var url = details.url;
    //通过匹配测试一个请求
    if (url.indexOf("googleapis") != -1) {
	var newUrl = url.replace(/http[s]{0,1}\:\/\/(\w+)\.googleapis\.com/, 'http://$1.useso.com');
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