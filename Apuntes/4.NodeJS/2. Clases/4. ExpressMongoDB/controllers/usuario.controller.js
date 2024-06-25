const Usuario = require('../models/usuario.model')

// GET
async function buscarTodos() {
    const usuarios = await Usuario.find()
    return usuarios
}

// GET BY ID
async function buscarPorId(id) {
    const usuarioEncontrado = await Usuario.findById(id)
    return usuarioEncontrado
}

// POST
async function crearUsuario(nombre, email, password) {
    const nuevoUsuario = new Usuario({
        // nombre.models: nombre.function
        nombre: nombre,
        email: email,
        password: password
    })

    await nuevoUsuario.save()

    return nuevoUsuario
}

// DELETE
async function eliminarUsuario(id) {
    const usuarioBorrado = await Usuario.findByIdAndDelete(id)
    return usuarioBorrado
}

// PUT/PATCH
async function modificarUsuario(id, nombre, email, password) {
    const usuarioModificado = await Usuario.findByIdAndUpdate(id, {nombre: nombre, email: email, password: password})
    return usuarioModificado
}

module.exports = {
    buscarTodos,
    buscarPorId,
    crearUsuario,
    eliminarUsuario,
    modificarUsuario
}