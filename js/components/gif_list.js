var GifList = (function Module(Component) {
    function constructor(props, element) {
        Component.call(this, props, element || 'div');
    }

    var methods = {
        template : function() {
            var gifCards = this._props.children;

            /* Template start */
            var className = this._props.className || '';
            var html = '';

            for (var i = 0; i < gifCards.length; i++) {
                html += gifCards[i].template();
            }

            html += '</div>';
            /* Template end */

            return html;
        }
    }

    constructor.prototype = Object.assign({}, Component.prototype, methods);
    constructor.prototype.constructor = constructor;

    return constructor;
})(Component);