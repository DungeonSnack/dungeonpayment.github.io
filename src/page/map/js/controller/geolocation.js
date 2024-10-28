import Feature from "https://cdn.skypack.dev/ol/Feature.js";
import Point from "https://cdn.skypack.dev/ol/geom/Point.js";
import VectorSource from "https://cdn.skypack.dev/ol/source/Vector.js";
import { Vector as VectorLayer } from "https://cdn.skypack.dev/ol/layer.js";
import { fromLonLat } from "https://cdn.skypack.dev/ol/proj.js";
import { Style, Icon } from "https://cdn.skypack.dev/ol/style.js"; // Tambahkan ini
import { map } from "../config/peta.js"; // Sesuaikan dengan jalur yang benar

let userMarkerLayer; // Layer untuk marker pengguna

export function getUserLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = [position.coords.longitude, position.coords.latitude];
        const lonLat = fromLonLat(coords);
        map.getView().setCenter(lonLat);
        map.getView().setZoom(15); // Ubah zoom sesuai kebutuhan
        addUserMarker(lonLat); // Tambahkan marker pengguna
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

function addUserMarker(lonLat) {
  // Buat layer untuk marker jika belum ada
  if (!userMarkerLayer) {
    userMarkerLayer = new VectorLayer({
      source: new VectorSource(),
    });
    map.addLayer(userMarkerLayer);
  }

  // Buat marker pengguna
  const userMarker = new Feature({
    geometry: new Point(lonLat),
  });

  // Tambahkan style untuk marker
  userMarker.setStyle(
    new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: "fraction",
        anchorYUnits: "pixels",
        src: "/assets/img/iconp.png", // Ganti dengan jalur gambar icon pengguna
        scale: 0.3,
      }),
    })
  );

  // Tambahkan marker ke sumber layer
  userMarkerLayer.getSource().addFeature(userMarker);
}

export function getUserCoords() {
  if (userMarkerLayer && userMarkerLayer.getSource().getFeatures().length > 0) {
    return userMarkerLayer.getSource().getFeatures()[0].getGeometry().getCoordinates();
  }
  return null;
}

