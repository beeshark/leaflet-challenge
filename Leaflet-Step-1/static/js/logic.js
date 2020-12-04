//start psuedo code

// create map using leaflet that plots all earthquakes from the data set based on their long & lat
// data markers should reflect the magnitude of the earthquke by their size&depth of the earthqake by color
// earthquakes w/ higher magnitudes should appear larger and ones with greater depth should appear darker in color

// HINT!!!! the depth of the earth can be found as the 3rd coordinate

// popups that give add info about the eq when marker is clicked

// legend that gives context for map data

var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
})

var myMap = L.map("mapid",{
    center: [45, -95], //change later??
    zoom: 5
});

lightmap.addTo(myMap);