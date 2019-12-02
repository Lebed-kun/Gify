var GifCard = (function Module(imports) {
    var Component = imports.Component;
    var GIPHY_URL = imports.GIPHY_URL;
    var GIPHY_API_KEY = imports.GIPHY_API_KEY;
    
    function constructor(props, element) {
        Component.call(this, props, element);
    }

    var methods = {
        getUrl : function() {
            var searchQuery = this._props.searchQuery;
            var rating = this._props.rating;

            var fullUrl = GIPHY_URL + GIPHY_API_KEY;
            fullUrl += '&tag=' + searchQuery 
            fullUrl += '&rating=' + rating;

            return fullUrl;
        },
        mounted : function() {
            var url = this.getUrl();

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();

            var self = this;

            xhr.onload = function() {
                new Promise(function(resolve, reject) {
                    var status = xhr.status;
                    if (status === 200) {
                        var json = JSON.parse(xhr.response);
                        resolve(json);
                    } else {
                        reject(xhr.statusText);
                    }
                }).then(function(json) {
                    var gifSource = json.data.images.preview_gif.url;
                    var gifSourceOriginal = json.data.image_original_url;

                    self.setProps({
                        previewLink : gifSource,
                        originalLink : gifSourceOriginal
                    })
                }).catch(function(err) {
                    self.setProps({
                        error : err
                    })
                })
            }
        },
        template : function() {
            var className = this._props.className || '';

            /* Template start */
            var html = '<div class="' + className + '"'
            
        }
    }
})({
    Component : Component,
    GIPHY_URL : GIPHY_URL,
    GIPHY_API_KEY : GIPHY_API_KEY
});