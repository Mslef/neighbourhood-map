function initialize() {

    var mapOptions = {
        center: { lat: 53.543256, lng: -113.501459 },
        zoom: 16
    };

    var map = new google.maps.Map($('#map-canvas')[0], mapOptions);

    var craftLatLng = new google.maps.LatLng(53.5433839,-113.5018665);

    var marker = new google.maps.Marker({
        position: craftLatLng,
        map: map,
        title: "Craft Beer Market"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);