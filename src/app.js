import { MapView as startMap } from "./components/map/map";
import { containerForm } from "./components/form/form";

export const renderBody = (latitude, longitude) =>
  `
    <main style="display:flex; justify-content: space-evenly;">
        <div style="width: 50%";>${containerForm(latitude, longitude)}</div>
        <div id="map"></div>
    </main>

`;

export const init = (_) => {
  startMap();
};
