import "./form.css";

export const containerForm = (latitude, longitude) => {
  return `<div class=container>${formulario(latitude, longitude)}</div>`;
};

const camposPrencherNome = () => {
  return `
            <div class="InputsDoTipoPreencher">
                        <input id="nomeCliente" type="text" placeholder="Nome Cliente" />
                        <input
                            id="pesoEntrega"
                            type="number"
                            placeholder="Peso da Entrega"
                        />`;
};

const campoRetornaLatLong = (latitude, longitude) => {
  return `
                <div class="buscarEndereco">
                        <input id="address" type="textbox" class="cep" type="text" placeholder="Endereço Cliente" />    <input type="button" id="buscar" value="Buscar" onclick="pegaInformacoesEndereco()">
                        </div>
                        </div>

                <div class="mostraValoresLatitudeELongitude">
                <input
                    id="Latitude"
                    class="valoresCordenada"
                    type="text"
                    placeholder="Latitude"
                    value=${latitude}
                />
                <input
                    id="Longitude"
                    class="valoresCordenada"
                    type="text"
                    placeholder="Longitude"
                    value=${longitude}
                />
                </div>

                `;
};

const parteDeBotoes = () => {
  return `
  <div>
        <div class="parteDoBotaoCadastrar">
                <input type="submit"  value="CADASTRAR CLIENTE" class="botaoFormulario"></input>
        </div>

        <div class="parteInferiorComBotao">
          <input type="submit" value="RESETAR CADASTRO" class="botaoFormulario cadastrarCliente">
          </input>
        </div>
    </div>
    `;
};

const formulario = (latitude, longitude) => {
  return `<form>
            ${camposPrencherNome()}
            ${campoRetornaLatLong(latitude, longitude)}
            ${parteDeBotoes()}
          </form>
`;
};
