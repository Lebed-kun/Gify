var GifCarg = (function Module(Component, constants) {
    var MAX_GIF_COUNT = constants.MAX_GIF_COUNT;
    var GIF_RATING = constants.GIF_RATING;
    
    function constructor(props) {
        var initProps = {
            className : 'container-tile'
        }
        props = Object.assign({}, initProps, props);

        Component.call(this, props, 'div');
    }

    var methods = {
        template : function() {
            var html = '';
            
            html += '<a href="' + (this._props.original || '') + '">';
            html += '<img src="' + (this._props.preview || '') + '">';
            html += '</a>';

            return html;
        },

        getUrl : function() {
            
        },

        mounted : function() {

        }
    }

    var prototype = constructor.prototype;
    constructor.prototype = Object.assign({}, prototype, methods);
    constructor.prototype.constructor = constructor;
})(Component, {
    MAX_GIF_COUNT : MAX_GIF_COUNT,
    GIF_RATING : GIF_RATING
})