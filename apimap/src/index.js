import "./styles.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
}); 

var map = L.map("map", {
  preferCanvas: true
}).setView([51.505, -0.09], 3);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



 
fetch("https://www.jsonblob.com/api/jsonBlob/1074662664856420352", {
})
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData.data);
    const data = responseData.data;

    const layerGroup = L.featureGroup().addTo(map);

    data.forEach(({ lat, lon, title, ville }) => {
      layerGroup.addLayer(
        L.marker([lat, lon], { icon }).bindPopup(
          `Title: ${title}, Ville: ${ville}`
        )
      );
    });

    map.fitBounds(layerGroup.getBounds());
  });
