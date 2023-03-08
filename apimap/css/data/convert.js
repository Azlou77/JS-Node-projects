//Script to convert json to geojson
function convert() {
    let json = document.querySelector("#json").value
    let geojson = JSON.parse(json)
    let features = geojson.features
    let newFeatures = []
    for (let i = 0; i < features.length; i++) {
        let feature = features[i]
        let newFeature = {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": []
            }
        }
        newFeature.properties = feature.properties
        newFeature.geometry.coordinates = feature.geometry.coordinates
        newFeatures.push(newFeature)
    }
    let newGeojson = {
        "type": "FeatureCollection",
        "features": newFeatures
    }
    document.querySelector("#geojson").value = JSON.stringify(newGeojson)
}

