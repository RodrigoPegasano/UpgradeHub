const express = require('express')
const router = express.Router()

const { buscarTodos, crearUsuario, eliminarUsuario, modificarUsuario } = require('../controllers/usuario.controller');

// GET
router.get("/", async (req, res) => {

    try {
        const usuarios = await buscarTodos()
        res.json(usuarios)

    } catch (error) {
        res.status(500).json({ mensaje: "Error del servidor" })

    }

})

// POST
router.post("/", async (req, res) => {

    await crearUsuario(req.body.nombre.trim(),
        req.body.apellido.trim(),
        req.body.email.trim(),
        req.body.password.trim(),
        req.body.dni.trim())

    res.json({ mensaje: "Usuario creado correctamente" })

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

// PATCH
router.patch("/:id", async (req, res) => {

    let encontrado = null
    let mensajes = []

    encontrado = await modificarUsuario(req.params.id, req.body.nombre.trim(), req.body.apellido.trim(), req.body.email.trim(), req.body.password.trim(), req.body.dni.trim(),)

    res.json(encontrado === null ? { mensaje: "Error: Usuario no encontrado" } : { dato: encontrado, mensaje: mensajes })

})

module.exports = router;
