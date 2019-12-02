var GifList = (function Module(Component) {
    function constructor(props, element) {
        Component.call(this, props, element);
    }

    var methods = {
        template : function(content) {
            var html = '<ul>';

            for (var i = 0; i < content.length; i++) {
                html += '<li>' + content[i] + ''
            }
        }
    }

    constructor.prototype = Object.create(Component.prototype);
    constructor.prototype.constructor = constructor;
})(Component);