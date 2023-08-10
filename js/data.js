export let data = [
    {
      titulo: "Cambia de pasta termica",
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/01/pasta-termica-procesador-2588109.jpg?tf=3840x",
      descripcion: "Como cambiar la pasta termica del procesador",
      precio: "$25",
      herramienta: [
        "Destornillador de estrella",
        "Paño de microfibra",
        "Pasta térmica",
      ],
      pasos: [
        "Reúne los materiales: Pasta térmica nueva, limpiador de CPU, papel de cocina, destornillador adecuado.",
        "Apaga y desconecta el equipo.",
        "Limpia la superficie con limpiador de CPU.",
        "Aplica una pequeña cantidad de pasta térmica en el centro del procesador.",
        "Vuelve a montar el componente.",
        "Conecta y enciende el dispositivo.",
        "Monitorea la temperatura durante unos días.",
      ],
    },
    {
      titulo: "Reparación de pantalla rota",
      img: "https://www.solutekcolombia.com/images/cambio_pantalla_portatil_bogota.jpg",
      descripcion: "Reparación de pantallas rotas para laptops y computadoras.",
      precio: "$100",
      herramienta: [
        "Destornilladores",
        "Pantalla de reemplazo",
        "Espátula",
      ],
      pasos: [
        "Desmontar la carcasa",
        "Retirar la pantalla rota",
        "Instalar la pantalla de reemplazo",
        "Volver a montar la carcasa",
      ],
    },
    {
      titulo: "Actualización de hardware",
      img: "https://mipanel.creattoweb.com/archivos/qfixinformatica.com/contenidos/s4.png",
      descripcion: "Mejora el rendimiento de tu equipo con actualizaciones de hardware.",
      precio: "Desde $50",
      herramienta: [
        "Memoria RAM",
        "Unidad de estado sólido (SSD)",
        "Tarjeta gráfica",
      ],
      pasos: [
        "Identificar las especificaciones del hardware actual",
        "Seleccionar y adquirir los componentes de actualización",
        "Instalar los nuevos componentes",
        "Realizar pruebas de rendimiento",
      ],
    },
    {
      titulo: "Reparación de teclado",
      img: "https://c8.alamy.com/compes/2g7a4nf/un-tecnico-profesional-en-electronica-de-computadoras-elimina-las-teclas-de-un-teclado-inalambrico-de-computadora-viejo-y-sucio-los-utiles-de-reparacion-y-limpieza-2g7a4nf.jpg",
      descripcion: "Reparación o reemplazo de teclados defectuosos o dañados.",
      precio: "$60",
      herramienta: [
        "Teclado de reemplazo",
        "Destornilladores",
        "Pinzas",
      ],
      pasos: [
        "Desmontar la carcasa",
        "Retirar el teclado defectuoso",
        "Instalar el teclado de reemplazo",
        "Volver a montar la carcasa",
      ],
    },
    {
      titulo: "Eliminación de virus y malware",
      img: "https://intratecno.com/wp-content/uploads/Antivirus-1200x1200-1.webp",
      descripcion: "Limpieza y eliminación de virus y malware para mejorar el rendimiento.",
      precio: "$80",
      herramienta: [
        "Software antivirus",
        "Software de eliminación de malware",
      ],
      pasos: [
        "Escanear el sistema en busca de virus y malware",
        "Eliminar las amenazas detectadas",
        "Realizar una limpieza de archivos temporales",
        "Optimizar la configuración de seguridad",
      ],
    },
    {
      titulo: "Reparación de problemas de carga",
      img: "https://repararelpc.es/wp-content/uploads/2020/10/reparar-laptop-2-scaled.jpg",
      descripcion: "Solución de problemas relacionados con la carga de la batería.",
      precio: "$70",
      herramienta: [
        "Destornilladores",
        "Cargador de reemplazo",
        "Multímetro",
      ],
      pasos: [
        "Verificar la batería y el cargador",
        "Reemplazar componentes defectuosos",
        "Realizar pruebas de carga",
      ],
    },
    {
      titulo: "Reparación de problemas de conexión WiFi",
      img: "https://fundacioncarlosslim.org/wp-content/uploads/2021/09/tecnico-reparacion-laptops-2.jpg",
      descripcion: "Solución de problemas relacionados con la conectividad WiFi.",
      precio: "$50",
      herramienta: [
        "Destornilladores",
        "Antenas WiFi de reemplazo",
      ],
      pasos: [
        "Diagnosticar problemas de conexión",
        "Reemplazar antenas WiFi defectuosas",
        "Actualizar controladores",
        "Realizar pruebas de conexión",
      ],
    },
    {
      titulo: "Limpieza interna y mantenimiento",
      img: "https://www.muycomputer.com/wp-content/uploads/2021/01/Mantenimiento_de_portatiles_5.jpg",
      descripcion: "Limpieza interna del polvo y mantenimiento para mejorar el rendimiento.",
      precio: "$40",
      herramienta: [
        "Aire comprimido",
        "Alcohol isopropílico",
      ],
      pasos: [
        "Desmontar la carcasa",
        "Limpiar los componentes internos del polvo",
        "Aplicar alcohol isopropílico en los conectores",
        "Volver a montar la carcasa",
      ],
    },
  ];

  // Agregar propiedad "ID" a cada objeto
  data = data.map((obj, index) => {
  return {
    ...obj,
    ID: index + 1,
  };
});