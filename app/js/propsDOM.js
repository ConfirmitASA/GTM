var propsDOM = (function (document) {
    return (function () {
        var host = document.createElement('div');
        host.id = 'gtm-confirmit-dataLayer';
        document.querySelector('body').appendChild(host);
        var registry = {};

        var PropsDOM = {
            dataLayer: {}
        };

        PropsDOM.__proto__ = {
            __createNode: function (id, checkCollision) {
                var node = host.querySelector('#' + id);
                if (!node) {
                    var el = document.createElement('input');
                    el.id = id;
                    el.style.display = 'none';
                    host.appendChild(el);
                    return el
                } else {
                    if (checkCollision) console.warn('element with', id, 'already exists on the page, you might be writing to client element')
                    return node
                }
            },
            _register: function (prop, value) {
                if (typeof prop !== 'string')
                    throw new TypeError('prop must be a string');

                var node = registry[prop] || this.__createNode(prop);
                node.value = value;
                registry[prop] = node;
                return value;
            },
            _unregister: function (prop, keepNode) {
                if (typeof prop !== 'string')
                    throw new TypeError('prop must be a string');
                if (!registry[prop])
                    throw new ReferenceError('prop "' + prop + '" is not registered or has been removed');

                var node = registry[prop];
                !keepNode && host.removeChild(node);
                delete registry[prop];
            },
            getItem: function (prop) {
                return this.dataLayer[prop];
            },
            setItem: function (prop, value) {
                this.dataLayer[prop] = value;
                return this._register(prop, value);
            },
            clear: function () {
                registry = {};
                this.dataLayer = {};
                host.parentNode.removeChild(host);
                host = null;
            }
        };

        return PropsDOM
    })()
})(document);

