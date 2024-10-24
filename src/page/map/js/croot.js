import { map } from './config/peta.js';
import { 
    onClosePopupClick, 
    onDeleteMarkerClick, 
    onSubmitMarkerClick, 
    onMapClick, 
    onMapPointerMove, 
    disposePopover 
} from './controller/popup.js';
import { onClick } from 'https://cdn.jsdelivr.net/gh/jscroot/element@0.1.7/croot.js';
import { getAllCoordinates } from './controller/cog.js';

// Menambahkan event listener untuk berbagai interaksi
onClick('popup-closer', onClosePopupClick);
onClick('insertmarkerbutton', onSubmitMarkerClick);
onClick('hapusbutton', onDeleteMarkerClick);
onClick('hitungcogbutton', getAllCoordinates);

// Menambahkan event listener untuk interaksi peta
map.on('click', onMapClick);
map.on('pointermove', onMapPointerMove);
map.on('movestart', disposePopover);
