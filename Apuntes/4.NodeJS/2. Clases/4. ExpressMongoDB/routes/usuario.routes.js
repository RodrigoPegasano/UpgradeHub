const express = require('express')
const router = express.Router()

// Controllers
const { buscarTodos, buscarPorId, crearUsuario, eliminarUsuario, modificarUsuario } = require('../controllers/usuario.controller')

// Helpers
const { validarCrearUsuario } = require('../helpers/validadores')

// Middlewares
const { middlewareCrearUsuario, middlewareEmailValidacion } = require('../middlewares/usuario.middlewares')

// GET ALL
router.get("/", async (req, res) => {

    // Utilizar el try and catch evita que se nos caiga el servidor
    try {

        const usuarios = await buscarTodos()
        res.json(usuarios)

    } catch (error) {

        res.status(500).json({ mensaje: "Error interno del servidor" })

        // Podemos imprimir el error en modo String (nos muestra todos los datos del error)
        // res.status(500).json({ mensaje: String(error) })

    }

})

// GET BY ID
router.get("/:id", async (req, res) => {

    // Utilizar el try and catch evita que se nos caiga el servidor
    try {

        const usuarioEncontrado = await buscarPorId(req.params.id)

        if (usuarioEncontrado) {
            res.json(usuarioEncontrado)
        } else {
            res.status(404).json({ mensaje: "Error: Usuario no encontrado" })
        }

    } catch (error) {

        res.status(500).json({ mensaje: "Error interno del servidor" })

        // Podemos imprimir el error en modo String (nos muestra todos los datos del error)
        // res.status(500).json({ mensaje: String(error) })

    }

})

// POST
router.post("/", middlewareCrearUsuario, middlewareEmailValidacion, async (req, res) => {

    try {
        await crearUsuario(req.body.nombre.trim(), req.body.email.trim().toLowerCase(), req.body.password)
        res.json({ mensaje: "Usuario creado correctamente" })

    } catch (error) {
        res.status(500).json({ mensaje: "Error interno del servidor" })

    }

})

// DELETE
router.delete("/:id", async (req, res) => {

    const usuarioBorrado = await eliminarUsuario(req.params.id)

    if (usuarioBorrado) {
        res.json({ mensaje: "Usuario borrado!" })
    } else {
        res.json({ mensaje: "Usuario no encontrado" })
    }

})

// PUT
router.put("/:id", async (req, res) => {

    let encontrado = null
    let mensajes = []

    const resultadoValidacion = validarCrearUsuario(req.body)

    if (!resultadoValidacion.valido) {

        res.status(400).json({ mensaje: resultadoValidacion.mensaje })

    } else {

        encontrado = await modificarUsuario(req.params.id, req.body.nombre.trim(), req.body.email.trim(), req.body.password.trim())

        res.json(encontrado === null ? { mensaje: "Error: Usuario no encontrado" } : { dato: encontrado, mensaje: mensajes })

    }
})

// PATCH
router.patch("/:id", async (req, res) => {

    let encontrado = null
    let mensajes = []

    encontrado = await modificarUsuario(req.params.id, req.body.nombre.trim(), req.body.email.trim(), req.body.password.trim())

    res.json(encontrado === null ? { mensaje: "Error: Usuario no encontrado" } : { dato: encontrado, mensaje: mensajes })

})

module.exports = router