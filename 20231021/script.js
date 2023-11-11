// let resposta = prompt("Qual a sua idade?")



// if (resposta>17) {
//     alert("Pode dirigir")
// } else {
//     alert("Não pode Dirigir")
// }

// let resposta = prompt("Qual a sua idade?")

let resposta = prompt("Qual a sua idade?");
// resposta=Number(resposta)
// resposta=parseInt(idade)

if (resposta < 18) {
    alert("Você é adolecente")
} else if (+resposta === 18) {
    alert("Você tem 18")
} else {
    alert("Você é adulto")
}

