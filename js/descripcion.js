let caja_descripcion = `
<div class="descripcion-container">
    <img src="https://sotein.com.co/wp-content/uploads/2021/06/mantenimiento-y-reparacion-de-computadoras.jpg" alt="Imagen del producto">
    <h2>Nombre del producto</h2>
    <p>Descripción del producto: Aquí escribe una breve descripción sobre el producto.</p>
</div>
`;

// Obtener el elemento <main> y agregar el contenido de la descripción antes de él
const mainElement = document.getElementById("main");
mainElement.insertAdjacentHTML("beforebegin", caja_descripcion);
