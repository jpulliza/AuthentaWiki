//var markup = document.documentElement.innerHTML;
//alert(markup)

var tablink

chrome.tabs.getSelected(null, function (tab) {
    var tablink = tab.url;
    var article = tablink.slice(tablink.lastIndexOf("/")+1, tablink.length);

    insert = "https://tools.wmflabs.org/xtools/articleinfo/index.php?article=" + article + "&lang=en&wiki=wikipedia"

    document.getElementById("mydiv").innerHTML = '<p>For the full report click <a href="' + insert + '"target="_blank">HERE.</a></p><iframe src=' + insert + ' sandbox="" width="100%" height="100%" frameborder="0"></iframe>';

});