import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

const map = new Map({
  basemap: "streets-relief-vector"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-106.983, 38.869],
  zoom: 14
});

view.when(() => {
  console.log("Map is loaded");
})