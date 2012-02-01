function selectionOnClick(info, tab) {
	var word = info.selectionText;
	console.log(info);
	chrome.tabs.create({url: "http://dict.pl/dict?word=" + word + "&words=&lang=EN"});
}
var id = chrome.contextMenus.create({"title": "Search dict.pl for: '%s'", "contexts":["selection"], "onclick": selectionOnClick});