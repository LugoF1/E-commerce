document.addEventListener('DOMContentLoaded', obtenerProducto);

const productosContenedor = document.querySelector('.products');
function obtenerProducto(){

const urls = new URL(window.location.href);
const params = new URLSearchParams(urls.search);
const cat = params.get('cat');

const url = `src/bd/categories.php?cat=${cat}`;

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

         const divInfo = document.createElement('DIV');
         const divAll = document.createElement('DIV');

         const card = document.createElement('DIV');
         card.classList.add('card-product');

         divBtn.appendChild(btnMore);
         divBtn.appendChild(btnCart);

         divInfo.appendChild(h2);
         divInfo.appendChild(p);

         divAll.appendChild(divInfo);
         divAll.appendChild(divBtn);

         card.appendChild(image);
         card.appendChild(divAll);

        productosContenedor.appendChild(card);
     })
 }