import { renderBody, init } from "./app";
import { callApi, latELgn } from "./api/index";

// muda o body
document.querySelector("body").innerHTML = renderBody(4, 8);
// inicializa o leaflet
// console.log(latELgn());
init();
