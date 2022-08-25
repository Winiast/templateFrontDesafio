import './map.css';
import L from 'leaflet';



export default function MapView () {
    const map = L.map('map').setView([-27.583553473076613, -48.503621875172186], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}