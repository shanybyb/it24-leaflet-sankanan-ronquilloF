const map = L.map('map').setView([8.3160, 124.8579], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

const locations = [
    { name: "Sankanan Barangay Hall", lat: 8.3160, lng: 124.8579 },
    { name: "Sankanan Elementary School", lat: 8.3175, lng: 124.8565 },
    { name: "San Isidro Labrador Chapel", lat: 8.3148, lng: 124.8588 },
    { name: "Pineapple Plantation Viewpoint", lat: 8.3220, lng: 124.8500 },
    { name: "Dahilayan Junction (Sankanan Road)", lat: 8.3080, lng: 124.8650 }
];

locations.forEach(function(place) {
    L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup("<b>" + place.name + "</b><br>Sankanan, Manolo Fortich");
});

L.circle([8.3160, 124.8579], {
    color: "blue",
    fillColor: "#1796fd",
    fillOpacity: 0.2,
    radius: 500
}).addTo(map);

map.on("click", function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    L.popup()
        .setLatLng(event.latlng)
        .setContent(
            "<b>Clicked Coordinates:</b><br>" +
            "Latitude: " + lat.toFixed(5) + 
            "<br>Longitude: " + lng.toFixed(5)
        )
        .openOn(map);
});
