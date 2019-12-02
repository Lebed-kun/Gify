var Component = (function Module() {
    function constructor(props, element) {
        this._props = props || {};

        var type = typeof element;
        this._element = type === 'string' ? document.querySelector(element) : element;

        if (this.mounted) this.mounted();
    }
    
    var methods = {
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
            var html = this.template();

            var element = this._element;
            if (element instanceof Element) {
                element.innerHTML = html;
            } else if (element instanceof constructor) {
                
            }

            return html;
        }
    }

    var prototype = constructor.prototype;
    constructor.prototype = Object.assign({}, prototype, methods);
    constructor.prototype.constructor = constructor;

    return constructor;
})();