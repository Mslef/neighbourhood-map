var places = [
    {
        title: 'Craft Beer Market',
        id: 'ChIJSdYGvcs8oFMRzHh-vtHsKNQ',
        location: {lat: 53.542050, lng: -113.491300}
    },
    {
        title: 'Citadel Theatre',
        id: 'ChIJlc4ee0UioFMRhOLD__mjUr4',
        location: {lat:53.542451, lng: -113.48879999999997}
    },
    {
        title: 'Winspear Center',
        id: 'ChIJVdAXVUQioFMRF0G6jDBCG7o',
        location: {lat:53.543900, lng: -113.488215}
    },
    {
        title: 'Alberta Art Gallery',
        id: 'ChIJkwb3ks6HblMRnGcEDs3gUfg',
        location: {lat:49.696143, lng: -112.83840900000001}
    },
    {
        title: 'Edmonton Public Library',
        id: 'ChIJuyltKBAioFMRQW8csX-c4es',
        location: {lat:53.519455, lng: -113.497479}
    },
    {
        title: 'Haweli',
        id: 'ChIJqSQLf-QloFMRfDJdJHdUcEE',
        location: {lat: 53.649489, lng: -113.62926299999998}
    },
    {
        title: 'The Fairmont Hotel MacDonald',
        id: 'ChIJ25aWN0QioFMR1et7Rl46mF0',
        location: {lat:53.540393, lng: -113.48965900000002}
    },
    {
        title: 'Blue Plate Diner',
        id: 'ChIJE2mky6kjoFMRS2R6aPn3omY',
        location: {lat:53.542912, lng: -113.49910799999998}
    },
    {
        title: 'Credo',
        id: 'ChIJXcuUsdQjoFMRepcef8HD3t8',
        location: {lat: 53.546115, lng: -113.536159}
    }
];

function initialize() {

    var mapOptions = {
        center: { lat: 53.543256, lng: -113.501459 },
        zoom: 16
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    for(var i = 0; i < places.length; i++) {
        new google.maps.Marker({
            position: places[i].location,
            map: map,
            title: places[i].title
        });
    }

}

google.maps.event.addDomListener(window, 'load', initialize);