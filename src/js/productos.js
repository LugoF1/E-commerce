document.addEventListener('DOMContentLoaded', obtenerProductos);

const productosContenedor = document.querySelector('.products');
function obtenerProductos(){
    const url = `src/bd/productosBD.php`;

    fetch(url)
    .then(response => response.json())
    .then(data => mostrarProductos(data))
}

function mostrarProductos(data){
    data.forEach(producto => {
        const {id, imagen, nombre, descripcion_corta} = producto;

        const image = document.createElement('IMG');
        image.src = imagen;
        image.classList.add('product-image');
        image.alt = `Imagen de ${nombre}`;
        image.loading = 'lazy';

        const h2 = document.createElement('H2');
        h2.classList.add('product-name');
        h2.textContent = nombre;

        const p = document.createElement('P');
        p.classList.add('product-description');
        p.textContent = descripcion_corta;

        const btnMore = document.createElement('A');
        btnMore.classList.add('btn', 'btn-more');
        btnMore.textContent = 'Ver mas';
        btnMore.href = `producto.html?id=${id}`;

        const btnCart = document.createElement('A');
        btnCart.classList.add('btn', 'add-cart');
        btnCart.textContent = 'Agregar al Carrito';
        btnCart.href = `producto.html?id=${id}`;

        const divBtn = document.createElement('DIV');
        divBtn.classList.add('product-buttons');

        const card = document.createElement('DIV');
        card.classList.add('card-product');

        divBtn.appendChild(btnMore);
        divBtn.appendChild(btnCart);

        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(divBtn);

        productosContenedor.appendChild(card);
    })
}