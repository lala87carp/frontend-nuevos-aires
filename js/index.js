import{agregarAlCarrito} from"../js/funcionesCarrito.js";
import{obtenerCarrito} from"../js/storage.js";
import { actualizarContador, mostrarMensaje } from "../js/ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas-home");
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    fetch("../data/productos.json").then((res) => {
        if(!res.ok) {
            throw new Error ('Error HTTP status: ${res.status}')
        }

        return res.json();
    })
    .then((data) => {
        data.forEach(producto => {
            const tarjeta = document.createElement("article")
            tarjeta.classList.add("home-tarjeta-productos")

            const img = document.createElement("img")
            img.alt = producto.nombre
            img.src = './images/${producto.img}'

            const titulo = document.createElement("h3")
            titulo.textContent = producto.nombre
            
            const precio = document.createElement("p")
            precio.textContent = '$${producto.precio}'

            const boton = document.createElement("button")
                boton.classList.add("btn")
                boton.textContent = "Agregar al carrito"

                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto)
                })
            
                tarjeta.appendChild(img)
                tarjeta.appendChild(titulo)
                tarjeta.appendChild(precio)
                tarjeta.appendChild(boton)

                contenedor.appendChild(tarjeta)
        })
    })
    .catch((err) => console.log(err));
})