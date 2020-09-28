//** Creating map using Leaflt lib */

function map() {
    var mapboxAccessToken = "pk.eyJ1Ijoic2VibmFlIiwiYSI6ImNrZmk5dmw0dDBhN2wzMG9kYmh4dXNtbzAifQ.3HrbHO1mDwgHgyBApw0E6Q";
    var map = L.map('map').setView([53, 20], 4);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);

    L.geoJson(statesData).addTo(map);
}



map();