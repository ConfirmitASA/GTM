var cfDataLayer = (function (LP, pDOM, config) {
    if (typeof LP == null) throw new Error('localPreferences is not initialised, make sure this tag fires before cfDataLayer');
    if (typeof pDOM == null) throw new Error('propsDOM is not initialised, make sure this tag fires before cfDataLayer');

    return (function () {
        var DataLayer = {};
        DataLayer.__proto__ = {
            /* syncs from SessionStorage to HTMLInputElement*/
            sync: function (prop) {
                var value = LP.getItem(prop);
                pDOM.setItem(prop, value);
                return value
            },
            /*gets value from SessionStorage*/
            get: function (prop) {
                return LP.getItem(prop);
            },
            /* writes value to Session Storage and serializes to DOM via sync.
            * if `target` (LP | pDOM) is passed, only target is written to
            * */
            setLP: function (prop, value) {
                LP.setItem(prop, value);
                return this.sync(prop)
            },
            setDOM:function (prop, value) {
                return pDOM.setItem(prop, value);
            },
            /* removes value from session storage dataLayer if parameter is passed, else empties storage */
            clear: function (prop) {
                if (prop) {
                    LP.removeItem(prop);
                } else {
                    LP.clear();
                }
            },
            /* removes items as clear but for both local and DOM dataLayer */
            clearBoth: function (prop) {
                if (prop) {
                    this.clear(prop);
                    pDOM._unregister(prop, true)
                } else {
                    this.clear();
                    pDOM.clear();
                }
            },
            /**
             * clears survey cookie to be able to launch survey again if it had been launched before
             * */
            clearCookie: function(){
                var domain = location.hostname;
                var cookieName = 'Confirmit_InterceptSurvey_'+config.surveyID;
                document.cookie = cookieName +'=; Domain='+domain+'; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        };
        return DataLayer
    })();
})(localPreferences, propsDOM, cfGtmCfg);