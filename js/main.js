import { data } from "./data.js";

const main_Dom = document.querySelector("#main");
const caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");

function caja_descripcion(product) {
    return `
    <div class="descripcion-container">
        <div class="product-image">
            <img src="${product.img}" alt="Imagen del producto">
        </div>
        <div class="product-info">
            <h2>${product.titulo}</h2>
            <p class="product-description">${product.descripcion}</p>
            <p class="product-price">Precio: ${product.precio}</p>
            <h3>Herramientas necesarias:</h3>
            <ul class="product-tools">
                ${product.herramienta.map(tool => `<li>${tool}</li>`).join('')}
            </ul>
        </div>
    </div>
    `;
}

function ver_descripcion(event) {
    const productID = event.currentTarget.getAttribute("data-id");
    const selectedProduct = data.find(item => item.ID === parseInt(productID));

    caja_descripcion_DOM.innerHTML = caja_descripcion(selectedProduct);

    main_Dom.style.display = "none"; // Ocultar el contenido principal al mostrar la descripción
    caja_descripcion_DOM.style.display = "block"; // Mostrar la caja de descripción
}

data.forEach(cada_item => {
    const item = document.createElement("div");
    item.className = "item";
    item.setAttribute("data-id", cada_item.ID);
    item.innerHTML = `
    <div class="caja_img">
        <img src="${cada_item.img}" alt="${cada_item.titulo}">
    </div>
    <h2>${cada_item.titulo}</h2>
    <p>${cada_item.descripcion}</p> 
    <span>${cada_item.precio}</span>
    `;

    item.addEventListener("click", ver_descripcion);
    main_Dom.appendChild(item);
});
