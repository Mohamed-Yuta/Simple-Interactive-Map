import spots from "./data.js";

var map = L.map('map').setView([33.5731, -7.5898], 13)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

spots.forEach(function(spot) {
    L.marker([spot.lat, spot.lng]).addTo(map)
        .bindPopup(`<b>${spot.name}</b><br>${spot.description}`);
});