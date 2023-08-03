// Datos
import { data } from "./data.js"





data.forEach((cada_item) => {

    let main_Dom = document.querySelector("#main")


    let item = document.createElement("div")

item.className = "item"

item.innerHTML = `
<div class="caja_img">
    <img src="${cada_item.img}"/>
</div>
<h2>${cada_item.titulo}</h2>
<p>${cada_item.Descripcion}</p> 
<span>Q 100. 00</span>
`;
main_Dom.appendChild(item);
    
});