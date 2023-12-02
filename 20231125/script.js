// // Achar o elemento no html
// const h1Selecionado = document.querySelector("h1");

// console.log(h1Selecionado);

// // Manipular o html pelo js
// const h1Selecionado = document.querySelector("h1");


// h1Selecionado.style.background = "red";
// // h1Selecionado.textContent="FEC"; troca o texto
// // h1Selecionado.innerHTML="FEC"; Adionar um codigo html

// console.log(h1Selecionado);

// const h1Selecionado = document.querySelector("h1");
// h1Selecionado.style


// h1Selecionado.innerText = new Date().toLocaleDateString("pr-br");

// TRocar cor apertando no botão
// const divselecionadadia = document.querySelector("div");
// function divselecionad(){

//     divselecionadadia.style.background = "yellow"
// }

// const divselecionadanoite = document.querySelector("div");
// function divselecionan(){

//     divselecionadanoite.style.background = "black"
// }

// Outra forma

// function divselecionad(){
//     const divselecionadadia = document.getElementById("circulo");
//     divselecionadadia.style.background = "yellow"
// }


// function divselecionan(){
//     const divselecionadanoite = document.getElementById("circulo");
//     divselecionadanoite.style.background = "black"
// }
// const circulo = document.getElementById("ciruculo")

// function mudar(){
//     circulo.classList.toggle("noite");
// }

const botoes = document.getElementsByTagName("button")

botoes[0].style.background="red"

// const botoesArray = Array.from(botoes);
const botoesArray = [...botoes]


console.log(botoesArray);
