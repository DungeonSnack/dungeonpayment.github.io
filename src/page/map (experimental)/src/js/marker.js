import Feature from 'https://cdn.skypack.dev/ol/Feature.js';
import Point from 'https://cdn.skypack.dev/ol/geom/Point.js';
import VectorSource from 'https://cdn.skypack.dev/ol/source/Vector.js';
import { Vector as VectorLayer } from 'https://cdn.skypack.dev/ol/layer.js';
import { Style, Icon } from 'https://cdn.skypack.dev/ol/style.js';

let markerLayer; // Layer untuk marker

export function addMarker(map, coords, iconUrl) {
  // Buat layer untuk marker jika belum ada
  if (!markerLayer) {
    markerLayer = new VectorLayer({
      source: new VectorSource(),
    });
    map.addLayer(markerLayer); // Tambahkan layer ke peta
  }

  // Buat marker pengguna
  const marker = new Feature({
    geometry: new Point(coords),
  });

  // Tambahkan style untuk marker
  marker.setStyle(
    new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: iconUrl, // Menggunakan URL ikon yang diberikan
        scale: 0.3,
      }),
    })
  );

  // Tambahkan marker ke sumber layer
  markerLayer.getSource().addFeature(marker);
}
