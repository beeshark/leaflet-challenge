//start psuedo code

// create map using leaflet that plots all earthquakes from the data set based on their long & lat
// data markers should reflect the magnitude of the earthquke by their size&depth of the earthqake by color
// earthquakes w/ higher magnitudes should appear larger and ones with greater depth should appear darker in color

// HINT!!!! the depth of the earth can be found as the 3rd coordinate

// popups that give add info about the eq when marker is clicked

// legend that gives context for map data

var myMap = L.map("map-id",{
    center: [37.09, -95.71],
    zoom: 5
});



L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
}).addTo(myMap)

const link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(link, function(earthquakes) {
    console.log(earthquakes);
    createMap(earthquakes)});

function createMap(earthquakesData) {
    L.geoJSON(earthquakesData, {

    })
}

function markerSize(magnitude) {
    return magnitude * 10000;
}

function createCircleMarker(feature, latlng ){
      var markerOptions = {
        radius: markerSize(feature.properties.magnitude),
        fillColor: getColor(feature.properties.magnitude),
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }
      return L.circleMarker( latlng, markerOptions );
    };

function magColor(magnitude) {
    if (magnitude > 1 ){
        return 'green'
    } else if (magnitude > 2){
        return 'lightgreen'
    } else if (magnitude > 3){
        return 'yellow'
    } else if (magnitude > 4){
        return 'orange'
    } else if (magnitude > 5){
        return 'red'
    }
}