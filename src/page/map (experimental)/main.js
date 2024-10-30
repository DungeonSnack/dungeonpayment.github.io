import Map from 'https://cdn.skypack.dev/ol/Map.js';
import View from 'https://cdn.skypack.dev/ol/View.js';
import TileLayer from 'https://cdn.skypack.dev/ol/layer/Tile.js';
import OSM from 'https://cdn.skypack.dev/ol/source/OSM.js';
import { fromLonLat } from 'https://cdn.skypack.dev/ol/proj.js';
import { getUserLocation } from './src/js/geolocation.js'; // Mengimpor dari file geolocation.js di src/js
import { addMarker } from './src/js/marker.js';
import Feature from 'https://cdn.skypack.dev/ol/Feature.js';
import LineString from 'https://cdn.skypack.dev/ol/geom/LineString.js';
import VectorLayer from 'https://cdn.skypack.dev/ol/layer/Vector.js';
import VectorSource from 'https://cdn.skypack.dev/ol/source/Vector.js';
import { Style, Stroke } from 'https://cdn.skypack.dev/ol/style.js';

// Koordinat tempat yang ingin ditampilkan
const place = [107.578624, -6.876631];
const place2 = [107.577, -6.876631];

// Membuat peta dengan pusat pada koordinat `place`
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat(place), // Konversi koordinat
    zoom: 12
  })
});

// Memanggil fungsi untuk mendapatkan lokasi pengguna
getUserLocation(map);
const iconUrl = '../assets/img/icon1.png'; // Jalur ke ikon
addMarker(map, fromLonLat(place), iconUrl);
addMarker(map, fromLonLat(place2), iconUrl);

// Mengambil rute dari OpenRouteService dan menambahkannya ke peta
async function getRoute(startCoords, endCoords) {
  const apiKey = '5b3ce3597851110001cf624882f3bb85e1a34418ad443de256d74965'; // Ganti dengan API key Anda
  const url = `https://api.openrouteservice.org/v2/directions/driving-car?start=${startCoords[0]},${startCoords[1]}&end=${endCoords[0]},${endCoords[1]}`;

  console.log("Fetching route from:", url); // Cetak URL untuk debug

  const response = await fetch(url, {
    headers: {
      'Authorization': apiKey,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const errorData = await response.json(); // Ambil detail kesalahan
    console.error('Error details:', errorData);
    throw new Error('Error fetching route: ' + response.statusText);
  }

  const data = await response.json();
  console.log('API Response:', data); // Cetak respons dari API untuk debugging

  if (!data.routes || data.routes.length === 0) {
    throw new Error('No routes found');
  }

  return data.routes[0].geometry.coordinates; // Ambil koordinat rute
}

async function addRouteToMap(startCoords, endCoords) {
  const routeCoords = await getRoute(startCoords, endCoords);

  if (!routeCoords || routeCoords.length === 0) {
    throw new Error('No route coordinates found');
  }

  const routePoints = routeCoords.map(coord => fromLonLat(coord));

  const routeFeature = new Feature({
    geometry: new LineString(routePoints),
  });

  routeFeature.setStyle(new Style({
    stroke: new Stroke({
      color: 'blue',
      width: 4,
    }),
  }));

  const routeLayer = new VectorLayer({
    source: new VectorSource({
      features: [routeFeature],
    }),
  });

  map.addLayer(routeLayer);
}

// Menambahkan rute ke peta
const startCoords = fromLonLat(place); // Jakarta
const endCoords = fromLonLat(place2); // Bandung

addRouteToMap(startCoords, endCoords);
