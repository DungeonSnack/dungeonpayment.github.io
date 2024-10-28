import { Feature } from "https://cdn.skypack.dev/ol/Feature.js";
import { LineString } from "https://cdn.skypack.dev/ol/geom.js";
import { Stroke, Style as LineStyle } from "https://cdn.skypack.dev/ol/style.js";
import { Vector as VectorLayer } from "https://cdn.skypack.dev/ol/layer.js";
import { Vector as VectorSource } from "https://cdn.skypack.dev/ol/source.js";
import { fromLonLat } from "https://cdn.skypack.dev/ol/proj.js";

// Fungsi untuk mendapatkan rute dari dua titik
export function getRoute(startCoords, endCoords, map) {
  const url = `https://router.project-osrm.org/route/v1/driving/${startCoords[0]},${startCoords[1]};${endCoords[0]},${endCoords[1]}?overview=full`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0].geometry.coordinates;
        addRouteToMap(route, map);
      } else {
        console.error("No route found");
      }
    })
    .catch(error => console.error("Error fetching route:", error));
}

// Fungsi untuk menambahkan rute ke peta
function addRouteToMap(route, map) {
  const routeFeature = new Feature({
    geometry: new LineString(route.map(coord => fromLonLat(coord))),
  });

  const routeStyle = new LineStyle({
    stroke: new Stroke({
      color: 'blue',
      width: 4,
    }),
  });

  routeFeature.setStyle(routeStyle);

  const routeLayer = new VectorLayer({
    source: new VectorSource({
      features: [routeFeature],
    }),
  });

  map.addLayer(routeLayer);
}
