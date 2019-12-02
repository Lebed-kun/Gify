var Component = (function Module() {
    function constructor(props, element) {
        this._props = props || {};

        var type = typeof element;
        this._element = type === 'string' ? document.querySelector(element) : element;

        this.mounted();
    }
    
    var methods = {
        template : function(content) {
            return '';
        },

        render : function() {
            var content = '';
            var children = this._props.children;

            if (children && children.length) {
                for (var i = 0; i < children.length; i++) {
                    content += children[i].render();
                }
            }

            var html = this.template(content);

            var element = this._element;
            if (element) {
                element.innerHTML = html;
            }

            return html;
        }
    }

    var prototype = constructor.prototype;
    constructor.prototype = Object.assign({}, prototype, methods);
    constructor.prototype.constructor = constructor;

    return constructor;
})();