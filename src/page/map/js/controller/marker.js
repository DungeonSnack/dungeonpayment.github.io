import Feature from 'https://cdn.skypack.dev/ol/Feature.js';
import Point from 'https://cdn.skypack.dev/ol/geom/Point.js';
import VectorSource from 'https://cdn.skypack.dev/ol/source/Vector.js';
import { Vector as VectorLayer } from 'https://cdn.skypack.dev/ol/layer.js';
import { fromLonLat } from 'https://cdn.skypack.dev/ol/proj.js';
import { Icon, Style } from 'https://cdn.skypack.dev/ol/style.js';
import { map, idmarker } from '../config/peta.js';
import Overlay from 'https://cdn.skypack.dev/ol/Overlay.js';

// Buat overlay untuk pop-up
const popupElement = document.getElementById('popup'); // Pastikan ada elemen HTML untuk pop-up
const popup = new Overlay({
    element: popupElement,
    autoPan: true,
    positioning: 'bottom-center',
});
map.addOverlay(popup);

// Fungsi untuk menambahkan marker ke peta
export function insertMarker(name, long, lat, volume) {
    const marker = new Feature({
        type: 'icon',
        id: idmarker.id,
        name: name,
        volume: volume,
        geometry: new Point(fromLonLat([long, lat])),
    });

    marker.setStyle(
        new Style({
            image: new Icon({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: '/assets/img/icon1.png',
                scale: 0.5,
            }),
        })
    );

    const vectorSource = new VectorSource({
        features: [marker],
    });

    const vectorLayer = new VectorLayer({
        source: vectorSource,
    });

    map.addLayer(vectorLayer);

    // Tambahkan event listener untuk klik marker
    marker.on('click', function (evt) {
        popup.setPosition(evt.coordinate);
        popupElement.innerHTML = `<p>Name: ${name}<br>Volume: ${volume}</p>`;
        popupElement.style.display = 'block';
    });

    // Tingkatkan idmarker.id untuk marker berikutnya
    idmarker.id += 1;
}

// Fungsi untuk menghapus marker berdasarkan id
export function deleteMarker(idmarker) {
    let i = 0;
    let sudahhapus = 0;
    map.getLayers().forEach(layer => {
        if (i !== 0 && sudahhapus === 0) {
            layer.getSource().getFeatures().forEach(feature => {
                if (feature.get('id') == idmarker) {
                    map.removeLayer(layer);
                    sudahhapus = 1;
                    console.log("Layer dihapus");
                    return;
                }
            });
        }
        i++;
    });
}

// Fungsi untuk menambahkan marker Center of Gravity
export function insertMarkerCOG(x, y) {
    insertMarker('Center of Gravity', x, y, '-');
}

// Daftar tempat untuk menambahkan marker
const places = [
    [107.57567676530189, -6.874328155615692], // Marker 1
    [107.57717560948039, -6.875409662859955], // Marker 2
    [107.582000, -6.877000], // Marker 3
    [107.575718, -6.874782],
    [107.575677, -6.874941],
];

// Menambahkan marker untuk setiap lokasi di array places
places.forEach(place => {
    const [long, lat] = place; // Ambil longitude dan latitude
    insertMarker('Marker', long, lat, 'Volume'); // Ganti 'Marker' dan 'Volume' sesuai kebutuhan
});

// Update ID marker jika perlu
idmarker.id += places.length; // Misalkan Anda menambahkan banyak marker

// Event untuk menutup pop-up saat mengklik peta
map.on('click', function () {
    popupElement.style.display = 'none';
});

// Event listener untuk menutup pop-up saat mengklik penutup
document.getElementById('popup-closer').onclick = function () {
    popupElement.style.display = 'none';
    return false;
};

marker.on('click', function (evt) {
    popup.setPosition(evt.coordinate);
    popupElement.style.display = 'block'; // Pastikan pop-up ditampilkan
    popupElement.innerHTML = `<p>Name: ${name}<br>Volume: ${volume}</p>`;
});
