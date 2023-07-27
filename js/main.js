// Datos
import { data } from "./data.js"

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



