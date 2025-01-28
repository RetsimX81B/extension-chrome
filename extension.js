document.getElementById("googleSearch").addEventListener("click", function(){
    const query = document.getElementById("searchBox").value;
    if ( query )
    {
        const googleSearchURL = `https://www.google.com/search?q=${ encodeURIComponent( query)}`;
        chrome.tabs.create( { url: googleSearchURL } );
    }
});

document.getElementById("wikiSearch").addEventListener(
    "click", function(){
    const query = document.getElementById("searchBox").value;
    if ( query )
    {
        const wikiSearchURL = `https://en.wikipedia.org/wiki/Special:Search?search=${ encodeURIComponent( query )}`;
        chrome.tabs.create( { url: wikiSearchURL } );
    }
});


