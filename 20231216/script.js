const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios";


function criarEAddElemento(cidade) {
    const h1 = document.createElement("li");
    h1.textContent = cidade.nome;

    document.body.appendChild(h1);
}

function buscarCidadesCE() {
    //retorna uma Promisse
    const retorno = fetch(url);

    // Then trata a Promisse
    retorno
        .then((resposta) => {
            // transforma a resposta em json, retorna uma nova Promisse
            return resposta.json();
        })
        .then((json) => {
            json.forEach(criarEAddElemento);
        });
}

buscarCidadesCE();
