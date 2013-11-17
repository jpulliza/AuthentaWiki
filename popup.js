var tablink

chrome.tabs.getSelected(null, function (tab) {
    var tablink = tab.url;
    var article = tablink.slice(tablink.lastIndexOf("/")+1, tablink.length);
    insert = "https://tools.wmflabs.org/xtools/articleinfo/index.php?article=" + article + "&lang=en&wiki=wikipedia"

    document.getElementById("mydiv").innerHTML = '<iframe src=' + insert + ' sandbox="" width="100%" height="100%" frameborder="0"></iframe>';
});