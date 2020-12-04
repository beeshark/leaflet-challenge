//start psuedo code

// create map using leaflet that plots all earthquakes from the data set based on their long & lat
// data markers should reflect the magnitude of the earthquke by their size&depth of the earthqake by color
// earthquakes w/ higher magnitudes should appear larger and ones with greater depth should appear darker in color

// HINT!!!! the depth of the earth can be found as the 3rd coordinate

// popups that give add info about the eq when marker is clicked

// legend that gives context for map data

var myMap = L.map("mapid",{
    center: [45, -95], //change later
    zoom: 5
});