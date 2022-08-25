import startMap from './components/map/map';
import './api/index';

export const renderBody = _ => `
    <main>
        <div id="map"></div>
    </main>
`;

export const init = _ => {
    startMap();
}