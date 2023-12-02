function marcarConcluido(evento) {
    const elemento = evento.target;
    elemento.classList.toggle("feito");
}

function pegarValorInput() {
    const entrada = document.getElementById("entrada");

    return entrada.value;
}

function apagarValorInput() {
    const entrada = document.getElementById("entrada");

    entrada.value = "";
}

function pegarLista() {
    const lista = document.getElementById("lista");

    return lista;
}

function criarElementoLI(valor) {
    const li = document.createElement("li");
    li.onclick = marcarConcluido;
    li.textContent = valor;

    return li;
}

function inserirItem() {
    const valor = pegarValorInput();
    const lista = pegarLista();

    if (valor.trim()) {
        const li = criarElementoLI(valor);
        lista.appendChild(li);
        apagarValorInput();
    } else {
        alert("Descreva o novo item");
    }
}
