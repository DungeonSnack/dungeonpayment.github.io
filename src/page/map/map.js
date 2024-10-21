import './map.css';
import Map from './src/dist/ol.js.map';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

// Inisialisasi peta
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // Menggunakan OpenStreetMap
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]), // Koordinat pusat (longitude, latitude)
        zoom: 2 // Tingkat zoom
    })
});

