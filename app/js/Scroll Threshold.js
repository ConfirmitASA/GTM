(function (window, document) {
    //configure here
    var triggerThreshold = 10; //% scroll top
    var gtmVar = 'gtm-triedToLeave';

    // end configuration
    // main script
    function throttle(fn, wait) {
        var time = Date.now();
        return function () {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        }
    }


    window.addEventListener('load', function () {
        var body = document.body,
            html = document.documentElement;
        var pastScrollPosition = 0;
        var alreadyTriggered = false;
        var height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        var triggerOffset = height / 100 * triggerThreshold;
        var scrollCallback = function () {
            var currentScroll = window.pageYOffset;
            var scrolledUp = pastScrollPosition > currentScroll;
            var scrollLessThanThreshold = currentScroll <= triggerOffset;
            if (scrolledUp && scrollLessThanThreshold && !alreadyTriggered) {
                alreadyTriggered = true;
                cfDataLayer.setLP(gtmVar, true);
                cfDataLayer.sync(gtmVar);
                console.log('less than 10%');
                dataLayer.push({event: 'launchSurvey'})
            }
            pastScrollPosition = currentScroll;
        };
        window.addEventListener('scroll', throttle(scrollCallback, 66)); //execute @ 15fps
    });
})(window, document);