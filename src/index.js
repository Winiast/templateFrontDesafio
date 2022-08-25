import { renderBody, init} from './app';

// muda o body
document.querySelector('body').innerHTML = renderBody()
// inicializa o leaflet
init()
