function initialize() {

    var mapOptions = {
        center: { lat: 46.097276, lng: -64.711679 },
        zoom: 15
    };

    var map = new google.maps.Map($('#map-canvas')[0], mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);