// CONTROLLER DE LAS ROUTES DE LA PÁGINA

const Usuario = require('../models/usuario.model');

// GET
async function buscarTodos() {

    const usuarios = await Usuario.find()
    return usuarios

}

// POST
async function crearUsuario(nombre, apellido, email, password, dni) {

    const nuevoUsuario = new Usuario({
        // nombre.models: nombre.function
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        dni: dni
    })

    await nuevoUsuario.save()

    return nuevoUsuario

}

// DELETE
async function eliminarUsuario(id) {

    const usuarioBorrado = await Usuario.findByIdAndDelete(id)
    return usuarioBorrado

}

// PATCH
async function modificarUsuario(id, nombre, apellido, email, password, dni) {

    const usuarioModificado = await Usuario.findByIdAndUpdate(id, {nombre: nombre, apellido: apellido, email: email, password: password, dni: dni})
    return usuarioModificado

}

module.exports = {
    buscarTodos,
    crearUsuario,
    eliminarUsuario,
    modificarUsuario
}