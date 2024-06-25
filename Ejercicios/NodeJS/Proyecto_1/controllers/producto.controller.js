// CONTROLLER DE LAS ROUTES DE LA PÁGINA

const Producto = require('../models/producto.model');

// GET (todos los productos que tenemos)
async function buscarTodos() {

    const productos = await Producto.find();
    return productos;

}

// POST
async function crearProducto(nombre, color, tipo, talla, precio) {

    const nuevoProducto = new Producto({
        // nombre.models: nombre.function
        nombre: nombre,
        color: color,
        tipo: tipo,
        talla: talla,
        precio: precio
    })

    await nuevoProducto.save()

    return nuevoProducto

}

// DELETE
async function eliminarProducto(id) {

    const productoBorrado = await Producto.findByIdAndDelete(id)
    return productoBorrado

}

// PATCH
async function modificarProducto(id, nombre, color, tipo, talla, precio) {

    const productoModificado = await Producto.findByIdAndUpdate(id, {nombre: nombre, color: color, tipo: tipo, talla: talla, precio: precio})
    return productoModificado

}

module.exports = {
    buscarTodos,
    crearProducto,
    eliminarProducto,
    modificarProducto
}