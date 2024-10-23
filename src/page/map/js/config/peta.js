import Map from 'https://cdn.skypack.dev/ol/Map.js';
import View from 'https://cdn.skypack.dev/ol/View.js';
import TileLayer from 'https://cdn.skypack.dev/ol/layer/Tile.js';
import XYZ from 'https://cdn.skypack.dev/ol/source/XYZ.js';
import OSM from 'https://cdn.skypack.dev/ol/source/OSM.js';
import {fromLonLat} from 'https://cdn.skypack.dev/ol/proj.js';
import Overlay from 'https://cdn.skypack.dev/ol/Overlay.js';
import {container} from 'https://cdn.jsdelivr.net/gh/jscroot/element@0.1.7/croot.js';
import {Vector as VectorLayer} from 'https://cdn.skypack.dev/ol/layer.js';
import Feature from 'https://cdn.skypack.dev/ol/Feature.js';
import Point from 'https://cdn.skypack.dev/ol/geom/Point.js';
import Style from 'https://cdn.skypack.dev/ol/style/Style.js';
import Icon from 'https://cdn.skypack.dev/ol/style/Icon.js';


const attributions = '<a href="https://petapedia.github.io/" target="_blank">&copy; Powered by PetaPedia Indonesia</a> ';

const place = [	107.578624,-6.876631];

export let idmarker = {id:1};

const basemap = new TileLayer({
  source: new OSM({attributions: attributions,}),
});

const defaultstartmap = new View({
  center: fromLonLat(place),
  zoom: 12,
});

export const overlay = new Overlay({
    element: container('popup'),
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });

export const popupinfo = new Overlay({
    element: container('popupinfo'),
    autoPan: {
      animation: {
        duration: 250,
      },
    },
});

export let map = new Map({
  overlays: [overlay,popupinfo],
  target: 'map',
  layers: [
    basemap
  ],
  view: defaultstartmap,
});


// Buat fitur marker
const markerFeature = places.map(place => {
const markerFeature = new Feature({
  geometry: new Point(fromLonLat(place)), // Ganti dengan koordinat marker
})}) ;

// Atur gaya untuk marker
markerFeature.setStyle(new Style({
  image: new Icon({
    src: 'https://openlayers.org/en/latest/examples/data/icon.png', // URL ikon
    scale: 0.1, // Ubah skala sesuai kebutuhan
  }),
}));

// Buat sumber dan layer untuk marker
const vectorSource = new VectorSource({
  features: [markerFeature],
});
const markerLayer = new VectorLayer({
  source: vectorSource,
});

// Tambahkan layer marker ke peta
map.addLayer(markerLayer);

const places = [
  [107.57567676530189, -6.874328155615692], // Marker 1
  [107.57717560948039, -6.875409662859955], // Marker 2
  [107.582000, -6.877000], // Marker 3
];
