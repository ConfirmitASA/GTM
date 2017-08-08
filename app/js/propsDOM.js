var propsDOM = (function (document) {
    return (function () {
        var host = document.createElement('div');
        host.id = 'gtm-confirmit-dataLayer';
        document.querySelector('body').appendChild(host);

        var PropsDOM = {
            registry: {},
            host: host
        };

        PropsDOM.__proto__ = {
            _createNode: function (id, checkCollision) {
                var node = this.host.querySelector('#' + id);
                if (!node) {
                    var el = document.createElement('input');
                    el.id = id;
                    el.style.display = 'none';
                    this.host.appendChild(el);
                    return el
                } else {
                    if (checkCollision) console.warn('element with', id, 'already exists on the page, you might be writing to client element')
                    return node
                }
            },
            register: function (prop, value) {
                if (typeof prop !== 'string')
                    throw new TypeError('prop must be a string');
                if (this.registry[prop])
                    console.warn('prop "' + prop + '" is already registered with value', this.registry[prop], ', will reset it to', value);

                var node = this.registry[prop] || this._createNode(prop);
                node.value = value;
                this.registry[prop] = node;
                return value;
            },
            unregister: function (prop, keepNode) {
                if (typeof prop !== 'string')
                    throw new TypeError('prop must be a string');
                if (!this.registry[prop])
                    throw new ReferenceError('prop "' + prop + '" is not registered or has been removed');

                var node = this.registry[prop];
                !keepNode && this.host.removeChild(node);
                delete this.registry[prop];
            },
            getItem: function (prop) {
                return this.registry[prop].value;
            },
            setItem: function (prop, value) {
                this.registry[prop].value = value;
                return value;
            },
            clear: function () {
                this.registry = {};
                this.host.parentNode.removeChild(this.host);
                this.host = null;
            }
        };

        return PropsDOM
    })()
})(document);

