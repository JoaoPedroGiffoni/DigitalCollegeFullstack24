// const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios";


// function criarEAddElemento(cidade) {
//     const h1 = document.createElement("li");
//     h1.textContent = cidade.nome;

//     document.body.appendChild(h1);
// }

// function buscarCidadesCE() {
//     //retorna uma Promisse
//     const retorno = fetch(url);

//     // Then trata a Promisse
//     retorno
//         .then((resposta) => {
//             // transforma a resposta em json, retorna uma nova Promisse
//             return resposta.json();
//         })
//         .then((json) => {
//             json.forEach(criarEAddElemento);
//         });
// }

// buscarCidadesCE();
const url =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios";

const cidades = document.getElementById("cidades");

function criarEAddElemento(cidade) {
    const cidadeOption = document.createElement("option");
    cidadeOption.textContent = cidade.nome;

    cidades.appendChild(cidadeOption);
}

async function buscarCidadesCE() {
    const resposta = await fetch(url);
    const json = await resposta.json();

    json.forEach(criarEAddElemento);
}


buscarCidadesCE();
