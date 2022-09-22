import { MapView as startMap } from "./components/map/map";
import { formulario, containerForm } from "./components/form/form";
import "./api/index";

export const renderBody = () => `
    <main style="display:flex; justify-content: space-evenly; background-color: red;">
        <div style="width: 50%";>${containerForm()}</div>
        <div id="map"></div>
    </main>
`;

export const init = (_) => {
  startMap();
};
