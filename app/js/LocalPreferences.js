var localPreferences = (function (sessionStorage) {
    var namespace = 'confirmitInterceptLP';
    var proto = {
        __updateSessionStorage: function () {
            typeof sessionStorage !== 'undefined' && sessionStorage.setItem(namespace, JSON.stringify(this.storage));
        },
        getItem: function (name) {
            return this.storage[name];
        },

        setItem: function (name, value) {
            this.storage[name] = value;
            this.__updateSessionStorage();
        },
        removeItem: function (name) {
            delete this.storage[name];
            this.__updateSessionStorage();
        },
        clear: function () {
            this.storage = {}
        }
    };
    var storage;
    if (typeof sessionStorage !== 'undefined') {
        storage = sessionStorage.getItem(namespace);
        if (storage) {
            storage = JSON.parse(storage)
        } else {
            storage = {}
        }

    } else {
        console.error('sessionStorage support is not detected');
    }

    var LocalPreferences = {
        storage: storage
    };

    LocalPreferences.__proto__ = proto;

    return LocalPreferences
})(sessionStorage);
