import './map.css';
import L from 'leaflet';


let map = null

const getMap = () => {
    map = map || L.map('map').setView([-27.583553473076613, -48.503621875172186], 13);
    return map;
}

export function MapView () {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(getMap());
}