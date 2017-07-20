(function () {
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
        var value = window.sessionStorage.getItem(this.name);
        return parseInt(value) || 0
    };
    TimeSpent.prototype.update = function () {
        var total = this.total();
        window.sessionStorage.setItem(this.name, total);
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
        window.sessionStorage.removeItem(sessionStorageName);
    };

    /*
     do not edit above this line
     ---------------------------------------------------
     */

    var sessionStorageName = 'ConfirmitGTM_timeSpent';
    var GTMeventName = 'longTimeSpentOnSite';
    new TimeSpent({
        name: sessionStorageName,
        timeout: 5, //time between writes to browser session storage (in seconds)
        triggerTime: 16,  //time when callback should trigger (in seconds)
        callback: function () {
            if (dataLayer) {
                dataLayer.update({event: GTMeventName})
            }
        }
    });
})();