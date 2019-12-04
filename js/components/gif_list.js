var GifList = (function Module(Component) {
    function constructor(props) {
        Component.call(this, props, 'div');
    }

    var methods = {
        mounted : function() {
            // Generate gif cards
        }
    }

    var prototype = constructor.prototype;
    constructor.prototype = Object.assign({}, prototype, methods);
    constructor.prototype.constructor = constructor;

    return constructor;
})(Component);