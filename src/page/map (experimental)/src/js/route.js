import { fromLonLat, toLonLat } from 'https://cdn.skypack.dev/ol/proj.js';
import { LineString } from 'https://cdn.skypack.dev/ol/geom.js';
import Feature from 'https://cdn.skypack.dev/ol/Feature.js';
import VectorSource from 'https://cdn.skypack.dev/ol/source/Vector.js';
import { Vector as VectorLayer } from 'https://cdn.skypack.dev/ol/layer.js';
import { Style, Stroke } from 'https://cdn.skypack.dev/ol/style.js';

// Layer untuk rute
let routeLayer;

export function drawRoute(map, userCoords, destinationCoords) {
  // Buat layer untuk rute jika belum ada
  if (!routeLayer) {
    routeLayer = new VectorLayer({
      source: new VectorSource(),
    });
    map.addLayer(routeLayer); // Tambahkan layer ke peta
  } else {
    routeLayer.getSource().clear(); // Kosongkan layer jika sudah ada
  }

  // Membuat garis rute
  const route = new LineString([userCoords, destinationCoords]);
  const routeFeature = new Feature(route);

  // Tambahkan style untuk rute
  routeFeature.setStyle(
    new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 3,
      }),
    })
  );

  // Tambahkan rute ke sumber layer
  routeLayer.getSource().addFeature(routeFeature);
}
