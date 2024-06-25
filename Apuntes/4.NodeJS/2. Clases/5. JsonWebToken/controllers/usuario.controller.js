// Models
const Usuario = require('../models/usuario.model')

// Json Web Token
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Helpers
const { encriptar, comprobar } = require('../helpers/encriptacion')

// ALL
async function buscarTodos() {
    const usuarios = await Usuario.find()
    return usuarios
}

// BY EMAIL
async function buscarTodosPorEmail(email) {
    const usuarios = await Usuario.find({ email: email })
    return usuarios
}

// FIND EMAIL
async function buscarUnoPorMail(email) {
    const usuarioEncontrado = await Usuario.findOne({ email: email })
    return usuarioEncontrado
}

// BY ID
async function buscarPorId(id) {
    const usuarioEncontrado = await Usuario.findById(id)
    return usuarioEncontrado
}

// CREATE USER
async function crearUsuario(nombre, email, password, rol) {
    const hash = await encriptar(password)
    const nuevoUsuario = new Usuario({
        // nombre.models: nombre.function
        nombre: nombre,
        email: email,
        password: hash,
        rol: rol
    })

    await nuevoUsuario.save()

    return nuevoUsuario
}

// LOGIN
async function login(email, password) {
    const usuarioEncontrado = await Usuario.findOne({ email: email })

    if (usuarioEncontrado) {
        const resultadoComparacion = await comprobar(usuarioEncontrado.password, password)
        if (resultadoComparacion) {

            const token = jwt.sign({ id: usuarioEncontrado._id, name: usuarioEncontrado.email }, process.env.JWTSECRET, { expiresIn: '1h' })
            // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzhiYzczNTRjZWIxMmFiOTZmNWM5ZCIsIm5hbWUiOiJtYXRpYXNAZ21haWwuY29tIiwiaWF0IjoxNzAzMzQ0MzEyLCJleHAiOjE3MDMzNDc5MTJ9.Ytzw6yHBjwSvWvCYHzTtEAAs6vCSACOKP7sihUIM704

            return {
                usuario: usuarioEncontrado,
                token: token,
                mensaje: null
            }
        } else {
            return {
                usuario: null,
                token: null,
                mensaje: 'Password incorrecta'
            }
        }
    } else {
        return {
            usuario: null,
            token: null,
            mensaje: 'Email no encontrado'
        }
    }
}

// DELETE USER
async function eliminarUsuario(id) {
    const usuarioBorrado = await Usuario.findByIdAndDelete(id)
    return usuarioBorrado
}

// MODIFY USER
async function modificarUsuario(id, nombre, email, password, rol) {
    const usuarioModificado = await Usuario.findByIdAndUpdate(id, { nombre: nombre, email: email, password: password, rol: rol })
    return usuarioModificado
}

module.exports = {
    buscarTodos,
    buscarTodosPorEmail,
    buscarUnoPorMail,
    buscarPorId,
    crearUsuario,
    eliminarUsuario,
    modificarUsuario,
    login
}