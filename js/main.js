// Datos
import { data } from "./data.js"
import { caja_descripciom } from "./descripcion.js"

console.log(data)

let main_Dom = document.querySelector("#main")


data.forEach(element => {

    let item = document.createElement("div")

item.className = "item"

item.innerHTML = `
<div class="caja_img">
    <img src="${data[0].img}"/>
</div>
<h2>${data[0].titulo}</h2>
<p>${data[0].Descripcion}</p> 
<span>Q 100. 00</span>
`;
main_Dom.appendChild(item);
    
});

//Ver detalles del prodcuto

function saludar(){
    let caja_descripcion_DOM = document.querySelector(".descripcion del producto")
    
}

let productos = document.querySelectorAll(".tem")

productos.forEach(cada_item => {
    cada_elemento.addEventListener("click", saludar)
});


