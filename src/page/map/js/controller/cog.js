import { map, idmarker } from "../config/peta.js";
import { insertMarkerCOG } from "../controller/marker.js";
import { disposePopover } from "../controller/popup.js";
import { hide } from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.7/croot.js";

// Daftar tempat untuk digunakan sebagai koordinat
const places = [
  [107.57567676530189, -6.874328155615692], // Marker 1
  [107.57717560948039, -6.875409662859955], // Marker 2
  [107.582, -6.877], // Marker 3
];

// Fungsi untuk menghitung COG dari fitur yang ada di peta
export function getAllCoordinates() {
  let i = 0;
  let sudahhapus = 0;
  let pointlist = [];
  let totaldemand = 0;
  let Xcog = 0;
  let Ycog = 0;

  map.getLayers().forEach((layer) => {
    if (i !== 0 && sudahhapus === 0) {
      layer
        .getSource()
        .getFeatures()
        .forEach((feature) => {
          let node = {
            id: feature.get("id"),
            name: feature.get("name"),
            volume: feature.get("volume"),
            xy: feature.get("geometry").flatCoordinates,
          };
          pointlist.push(node);
          totaldemand += Number(feature.get("volume"));
          Xcog +=
            feature.get("geometry").flatCoordinates[0] *
            Number(feature.get("volume"));
          Ycog +=
            feature.get("geometry").flatCoordinates[1] *
            Number(feature.get("volume"));
        });
    }
    i++;
  });

  // Jika tidak ada fitur, gunakan koordinat dari places
  if (pointlist.length === 0) {
    places.forEach((place) => {
      const [long, lat] = place;
      pointlist.push({
        id: idmarker.id,
        name: "Manual Marker",
        volume: 1, // Asumsi volume 1 untuk contoh ini
        xy: [long, lat],
      });
      totaldemand += 1; // Menambahkan total demand
      Xcog += long;
      Ycog += lat;
      idmarker.id += 1; // Tingkatkan ID untuk marker berikutnya
    });
  }

  console.log(pointlist);
  let x = Xcog / totaldemand;
  let y = Ycog / totaldemand;
  console.log(x);
  console.log(y);
  insertMarkerCOG(x, y);
  disposePopover();
  hide("hitungcogbutton");
}
