// // const h2s=document.getElementsByTagName("h2");
// const h2s=document.querySelectorAll("h2");

// function mostrar(){
//     console.log("aqui")
// }

// h2s.forEach(mostrar);

// const imgs = document.querySelectorAll("img");

// imgs.forEach(function (imagem) {
//     imagem.style.border = "2px solid #000";
// });


const imgs = document.querySelectorAll("img");

function aplicaboda (elemento){
    elemento.style.border = "2px solid #000"

}

imgs.forEach(aplicaboda)