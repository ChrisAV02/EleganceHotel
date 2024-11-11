let indiceActual = 0;
const imagenes = document.querySelectorAll(".contenedor_img img");

function mostrarImagen(index) {
      imagenes.forEach((img, i) => {
            img.classList.toggle("mostrar", i === index);
      });
}

function moverCarrusel(direccion) {
      indiceActual += direccion;
      if (indiceActual < 0) {
            indiceActual = imagenes.length - 1;
      } else if (indiceActual >= imagenes.length) {
            indiceActual = 0;
      }
      mostrarImagen(indiceActual);
}

mostrarImagen(indiceActual);

