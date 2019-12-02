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

        template : function() {
            return '';
        },

        render : function() {
            var element = this._element;
            var children = this._props.children;
            var html = '';

            if (!children || !children.length) {
                html = this.template();
                element.innerHTML = html;
            } else {
                for (var i = 0; i < children.length; i++) {
                    element.innerHTML = '';
                    for (var i = 0; i < children.length; i++) {
                        element.appendChild(children[0]);
                    }
                }
            }
        }
    }

    var prototype = constructor.prototype;
    constructor.prototype = Object.assign({}, prototype, methods);
    constructor.prototype.constructor = constructor;

    return constructor;
})();