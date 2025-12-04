import{guardarCarrito, obtenerCarrito, vaciarCarrito} from "./storage.js";

import{actualizarContador, actualizrContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    carrito.push(producto);

    guardarCarrito(carrito);
    mostrarMensaje("Producto agregado");
}

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);

    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto Eliminado");
}

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito Vacio");
}