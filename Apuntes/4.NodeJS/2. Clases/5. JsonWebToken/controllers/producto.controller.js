const Producto = require('../models/producto.model')

// GET
async function buscarTodos() {
    const productos = await Producto.find()
    return productos
}

// GET BY WORD
async function buscarTodosQueContengan(nombre, marca) {
    const productos = await Producto.find({
        nombre: { "$regex": nombre, "$options": "i" },
        marca: { "$regex": marca, "$options": "i" }
    })

    return productos
}

// GET BY ID
async function buscarPorId(id) {
    const productoEncontrado = await Producto.findById(id)
    return productoEncontrado
}

// POST
async function crearProducto(nombre, marca, modelo) {
    const nuevoProducto = new Producto({
        // nombre.models: nombre.function
        nombre: nombre,
        marca: marca,
        modelo: modelo
    })

    await nuevoProducto.save()

    return nuevoProducto
}

// DELETE
async function eliminarProducto(id) {
    const productoBorrado = await Producto.findByIdAndDelete(id)
    return productoBorrado
}

// PUT/PATCH
async function modificarProducto(id, nombre, marca, modelo) {
    const productoModificado = await Producto.findByIdAndUpdate(id, { nombre: nombre, marca: marca, modelo: modelo })
    return productoModificado
}

module.exports = {
    buscarTodos,
    buscarTodosQueContengan,
    buscarPorId,
    crearProducto,
    eliminarProducto,
    modificarProducto
}