function LocalPreferences(ns) {
    this.nameSpace = ns;
    if (typeof sessionStorage !== 'undefined') {
        var storage = sessionStorage.getItem(this.nameSpace);
        if (storage) {
            this.storage = JSON.parse(storage)
        } else {
            this.storage = {}
        }
    }
}

LocalPreferences.prototype.__updateSessionStorage = function () {
    typeof sessionStorage !== 'undefined' && sessionStorage.setItem(this.nameSpace, JSON.stringify(this.storage));
};

LocalPreferences.prototype.getItem = function (name) {
    var item = this.storage[name];
    return typeof item!=='undefined' ? JSON.parse(item) : item
};

LocalPreferences.prototype.setItem = function (name, value) {
    this.storage[name] = value;
    this.__updateSessionStorage();
};
