//Carte variable
let map, marker 
window.onload = () => {
    //Function to load the map
    map = L.map("detailsMap").setView([48.8566, 2.3522], 13)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 1,
        maxZoom: 20
    }).addTo(map)
    //Event  on fucntion click
    map.on("click", mapClick)
    document.querySelector("#ville").addEventListener("blur", getCity)
}

//Function onclick
function mapClick(e) {
    //Get the position of the click
    let pos = e.latlng

    //Add a marker
    addMarker(pos)

    //Display the position in the input
    document.querySelector("#lat").value = pos.lat
    document.querySelector("#lon").value = pos.lng
}
//Function to add a marker
function addMarker(pos) {
    //Verify if a marker already exist
    if (marker != undefined) {
        map.removeLayer(marker)
    }

    marker = L.marker(pos, {
        draggable: true
    })
    //Event on marker drag
    marker.on("dragend", function (e) {
        pos = e.target.getLatLng()
        document.querySelector("#lat").value = pos.lat
        document.querySelector("#lon").value = pos.lng
    })
    marker.addTo(map)
}
//Function to get the city
function getCity() {
   
    //Get the position of the city
    let ville = document.querySelector("#ville").value
    let cp = document.querySelector("#cp").value
    let adresse = document.querySelector("#adresse").value
    let villecp = ville + " " + cp + " " + adresse
    let url = "https://nominatim.openstreetmap.org/search?q=" + villecp + "&format=json&polygon=1&addressdetails=1"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                let pos = {
                    lat: data[0].lat,
                    lng: data[0].lon
                    
                }
                map.setView(pos, 13)
                addMarker(pos)
                document.querySelector("#lat").value = pos.lat
                document.querySelector("#lon").value = pos.lng
            }
        }
        )
}

