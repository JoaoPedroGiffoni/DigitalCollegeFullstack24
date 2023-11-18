// let carro = {
//     marca:"Fiat",
//     preco:28.789,
//     modelos:"Mobi"
// }

// alert(carro.marca)


// let pessoa ={
//     nome:"João Pedro",
//     sobrenome:"Giffoni",
//     idade: 30
// }

// alert("Boa tarde, "+pessoa.sobrenome+" voce tem: "+pessoa.idade+" anos.")


// let gato = {
//     nome: "Gato",
//     peso: 2,
//     raca: "Siames",

//     miar() {
//         return "miauuuu"
//     },

//     toString() {
//         return this.nome + ", " + this.raca
//     }
// }

// alert(gato.toString())


// let gato = {
//     nome: "Gato",
//     raca: "Siames",
// }

// let gato1 = {
//     nome: "Lico",
//     raca: "Persa",
// }

// let gato2 = {
//     nome: "Juba",
// }

// alert(gato1.raca)


// function Gato(nomePassado, racaPassada) {
//     this.nome = nomePassado;
//     this.raca = racaPassada

// }

// let gato = new Gato("Lico", "Sianes")

// let gato1 = new Gato ("Lico","Persa")

// let gato2 = new Gato("Juba")

// console.log(gato2)


// function Gato(nomePassado, racaPassada) {
//     console.log(nomePassado, racaPassada)
//     this.nome = nomePassado;
//     this.raca = racaPassada

// }

// let gato = new Gato("Lico", "Sianes")

// let gato1 = new Gato ("Lico","Persa")

// let gato2 = new Gato("Juba")


// function Gato(nomePassado = "", racaPassada = "") {

//     // console.log(nomePassado, racaPassada)
//     this.nome = nomePassado;
//     this.raca = racaPassada

// }

// let gato = new Gato("Lico", "Sianes")

// let gato1 = new Gato("Lico", "Persa")

// let gato2 = new Gato("Juba")

// console.log(gato.raca.toUpperCase())


// function Gato(nomePassado = "", racaPassada = "") {

//     this.nome = nomePassado;
//     this.raca = racaPassada

// }

// let gato = new Gato("Lico", "Sianes")

// let gato1 = new Gato("Lico", "Persa")

// let gato2 = new Gato("Juba")

// // console.log(gato.raca.toUpperCase())

// let nome = new String("João Pedro")
// let idade = new Number(30)
// let teste = new Boolean("10")
// let cores = new Array("Vermelho","azul")

// console.log(cores)


function chamar() {
    document.body.innerHTML = "João"
}