(function () {

    var gtmVar = 'gtm-longTimeSpentOnSite';
    var context = ({{gtm-longTimeSpentOnSite}}).split(',');

    var config = {
        name: gtmVar,
        triggerTime: context[0] || 60,  //time when callback should trigger (in seconds)
        timeout: context[1] || 1, //time between writes to browser session storage (in seconds)
        callback: function () {
            cfDataLayer.sync(gtmVar)
            cfDataLayer.clearCookie();
            dataLayer.push({event: 'launchSurvey'})
        }
    }

    /****** do not edit below *****/

    function TimeSpent(options) {
        this.name = options.name;
        this.timeout = options.timeout * 1000;
        this.triggerTime = options.triggerTime * 1000;
        this.callback = options.callback;
        this.debug = options.debug;
        this.start();
        this.initialDelta = this.get();

        if (this.timeBeforeTrigger() > 0) { // launch only if time is positive
            window.addEventListener('beforeunload', function () {
                this.update()
            });

            //store time every `timeout` seconds just in case browserTab is closed via Alt+F4
            this.boundRecursiveUpdate = this.recursiveUpdate.bind(this);
            window.setTimeout(this.boundRecursiveUpdate, this.timeout);
        }
    }

    TimeSpent.prototype.get = function () {
        var value = cfDataLayer.get(this.name);
        return parseInt(value) || 0
    };
    TimeSpent.prototype.update = function () {
        var total = this.total();
        cfDataLayer.setLP(this.name, total);
        this.start(); // restart on update
        return total
    };
    TimeSpent.prototype.start = function () {
        this.startTime = new Date().getTime();
    };
    TimeSpent.prototype.delta = function () {
        var current = new Date().getTime();
        return current - this.startTime;
    };
    TimeSpent.prototype.total = function () {
        return this.initialDelta + this.delta();
    };
    TimeSpent.prototype.timeBeforeTrigger = function () {
        return this.triggerTime - this.initialDelta;
    };
    TimeSpent.prototype.recursiveUpdate = function () {
        this.initialDelta = this.update();
        var timeBeforeTrigger = this.timeBeforeTrigger();
        var success = timeBeforeTrigger <= 0;
        var nextTimeout = timeBeforeTrigger > this.timeout ? this.timeout : timeBeforeTrigger;

        if (!success) {
            window.setTimeout(this.boundRecursiveUpdate, nextTimeout)
        } else {
            this.callback.apply(this)
        }
    };
    TimeSpent.clear = function (sessionStorageName) {
        cfDataLayer.clear(sessionStorageName);
    };

    new TimeSpent(config);

})();