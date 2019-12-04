var Component = (function Module() {
    function constructor(props, element) {
        this._props = props || {};
        this._element = document.createElement(element);

        this.render();

        if (this.mounted) this.mounted();
    }
    
    var methods = {
        getElement : function() {
            return this._element;
        },
        
        getProps : function() {
            return this._props;
        },

        setProps : function(props) {
            var prevProps = this._props;
            this._props = Object.assign({}, prevProps, props);

            this.render();

            if (this.updated) this.updated(prevProps);
        },

        render : function() {
            var element = this.getElement();
            var children = this.getProps().children;

            if (element && element.length) {
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    child = child instanceof constructor ? child.getElement() : child;
                    
                    element.appendChild(child);
                }
            }
        }
    }

    var prototype = constructor.prototype;
    constructor.prototype = Object.assign({}, prototype, methods);
    constructor.prototype.constructor = constructor;

    return constructor;
})();