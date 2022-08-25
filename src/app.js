import startMap from './components/map/map';
export const renderBody = _ => `
    <main>
        <div id="map"></div>
    </main>
`;

export const init = _ => startMap();