// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
document.addEventListener("deviceready", onDeviceReady, false);


//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//modified function to show map and marker
function onSuccess(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var position = new google.maps.LatLng(lat, long);
    var map = document.getElementById('map');

    var mapProperties = {
        center:position,zoom:20,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }

    var newMap = new google.maps.Map(document.getElementById("map"), mapProperties);
    var pin = new google.maps.Marker({position:position,map:newMap, title:"Your location"});

}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}
