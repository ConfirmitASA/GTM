function LocalPreferences(ns) {
        this.nameSpace = ns;
        if(typeof localStorage !=='undefined'){
            var storage = localStorage.getItem(this.nameSpace);
            if(storage){
                this.storage = JSON.parse(storage)
            } else {
                this.storage={}
            }
        }
    }

LocalPreferences.prototype.__updateLocalStorage = function(){
    typeof localStorage !=='undefined' && localStorage.setItem(this.nameSpace, JSON.stringify(this.storage));
};

LocalPreferences.prototype.getItem = function(name){
    return this.storage[name]
};

LocalPreferences.prototype.setItem = function(name, value){
    this.storage[name] = value;
    this.__updateLocalStorage();
};
