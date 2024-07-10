document.addEventListener('DOMContentLoaded', obtenerProducto);

const productoContenedor = document.querySelector('.productoCont');
function obtenerProducto(){
    // Obtener la URL actual
const urls = new URL(window.location.href);

// Obtener los parámetros GET
const params = new URLSearchParams(urls.search);

// Acceder a un parámetro específico
const id = params.get('id');

    const url = `src/bd/producto.php?id=${id}`;

    fetch(url)
    .then(response => response.json())
    .then(data => mostrarProducto(data))
}

const formatterMXN = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  });

function mostrarProducto(data){
    data.forEach(producto => {
        const {id, nombre, imagen, categoria, marca, modelo, precio, stock, descripcion_larga} = producto;

        document.title = nombre;

        const image = document.createElement('IMG');
        image.src = imagen;
        image.classList.add('product-img');
        image.alt = `Imagen de ${nombre}`;
        image.loading = 'lazy';

        const divInfo = document.createElement('DIV');
        divInfo.classList.add('product-info');

        const h2 = document.createElement('H2');
        h2.classList.add('product-name');
        h2.textContent = nombre;

        const p = document.createElement('P');
        p.classList.add('product-descripcion');
        p.textContent = descripcion_larga;

        const ul = document.createElement('UL');
        ul.classList.add('feature');

        const li1 = document.createElement('LI');
        li1.textContent = categoria
        const li2 = document.createElement('LI');
        li2.textContent = marca
        const li3 = document.createElement('LI');
        li3.textContent = modelo

        const divInfo2 = document.createElement('DIV');
        divInfo2.classList.add('product-info2');

        const pInfo1 = document.createElement('P');
        pInfo1.textContent = `Stock: `;
        const pInfo2 = document.createElement('P');
        pInfo2.textContent = `Precio: `;
        const span1 = document.createElement('SPAN');
        span1.textContent = stock;
        const span2 = document.createElement('SPAN');
        span2.textContent = formatterMXN.format(precio);

        const divBtns = document.createElement('DIV');
        divBtns.classList.add('btns');

        const btnCart = document.createElement('A');
        btnCart.classList.add('btn', 'addCart');
        btnCart.textContent = 'Agregar al Carrito';
        btnCart.href = `#`;

        const btnBuyNow = document.createElement('A');
        btnBuyNow.classList.add('btn', 'buyNow');
        btnBuyNow.textContent = 'Comprar Ahora';
        btnBuyNow.href = `#`;

        divBtns.appendChild(btnCart);
        divBtns.appendChild(btnBuyNow);

        pInfo1.appendChild(span1)
        pInfo2.appendChild(span2);

        divInfo2.appendChild(pInfo1);
        divInfo2.appendChild(pInfo2);
        divInfo2.appendChild(divBtns);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

        divInfo.appendChild(h2);
        divInfo.appendChild(p);
        divInfo.appendChild(ul);
        divInfo.appendChild(divInfo2);

        productoContenedor.appendChild(image);
        productoContenedor.appendChild(divInfo);
    });
}


