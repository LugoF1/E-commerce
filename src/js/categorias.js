document.addEventListener('DOMContentLoaded', obtenerProductos);

const menuDesplegable = document.querySelector('.menu-desplegable');
function obtenerProductos(){
    const url =`src/bd/productosBD.json`;

    fetch(url)
    .then(response => response.json())
    .then(data => mostrarCategoria(data))
}

function mostrarCategoria(data){
    data.forEach(producto => {
        const {categoria} = producto;

        const a = document.createElement('a');
        a.classList.add('a-categoria');
        a.textContent = categoria;
        a.href = `categoria.html?cat=${categoria}`;

        const li = document.createElement('li');
        li.classList.add('categoria');

        li.appendChild(a);
        menuDesplegable.appendChild(li);

    })
}