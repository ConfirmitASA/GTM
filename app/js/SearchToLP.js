
// read search data
(function(){
    var lp = new LocalPreferences('confirmitInterceptLP');
    var searchHistory = lp.getItem('search');
    if(searchHistory && searchHistory.length>0){
        searchHistory = JSON.parse(searchHistory);
    }
    if(searchHistory && Array.isArray(searchHistory) && searchHistory.length>0){
        dataLayer.update({
            event: 'performedSearch',
            latestSearch: searchHistory.pop()
        });
    }
})();

//write search data
(function(){
    (function(){
        var lp = new LocalPreferences('confirmitInterceptLP');
        var searchValue = document.querySelector('.search>form>input:first-child').value;
        if(searchValue && searchValue.length>0){
            var searchHistory = lp.getItem('search');
            if(searchHistory && searchHistory.length>0){
                searchHistory = JSON.parse(searchHistory);
            }
            if(!searchHistory || !Array.isArray(searchHistory)){
                searchHistory = []
            }
            searchHistory.push(searchValue);
            lp.setItem('search', JSON.stringify(searchHistory));
        }
    })();
})();