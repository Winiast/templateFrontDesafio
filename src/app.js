import { MapView as startMap } from "./components/map/map";
import { containerForm } from "./components/form/form";
import { callApi } from "./api/index";

export const renderBody = (latitude, longitude) =>
  `
    <main style="display:flex; justify-content: space-evenly;">
        <div style="width: 50%";>${containerForm(latitude, longitude)}</div>
        <div id="map"></div>
    </main>
    ${console.log(callApi())}
`;

export const init = (_) => {
  startMap();
};
