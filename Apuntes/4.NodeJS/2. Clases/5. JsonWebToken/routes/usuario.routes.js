const express = require('express')
const router = express.Router()

// Controllers
const { buscarTodos, buscarPorId, crearUsuario, eliminarUsuario, modificarUsuario, login, buscarTodosPorEmail } = require('../controllers/usuario.controller')

// Helpers
const { validarCrearUsuario } = require('../helpers/validadores')

// Middlewares
const { middlewareCrearUsuario, middlewareEmailValidacion, middlewareEstaLoggeado, middlewareEsAdmin, middlewareEmailDuplicado } = require('../middlewares/usuario.middlewares')

// GET ALL
router.get("/", async (req, res) => {

    // Utilizar el try and catch evita que se nos caiga el servidor
    try {
        let usuarios = []

        if (req.query.email) {
            // Si hacemos un pedido con email o algun otro dato que no sea id
            // Ejemplo: /usuarios?email=rodrigo@gmail.com&password=1234
            usuarios = await buscarTodosPorEmail(req.query.email)

        } else {
            usuarios = await buscarTodos()
        }

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

// GET PERFIL
router.get("/zona-privada/perfil/:id", middlewareEstaLoggeado, async (req, res) => {

    const usuarioEncontrado = await buscarPorId(req.params.id)

    res.json({ mensaje: "Bienvenido a tu perfil " + usuarioEncontrado.nombre })

})

// GET HOME
router.get("/zona-admin/home", middlewareEsAdmin, async (req, res) => {

    res.json({ mensaje: "Hola admin" })

})

// POST
router.post("/", middlewareCrearUsuario, middlewareEmailValidacion, middlewareEmailDuplicado, async (req, res) => {

    try {
        await crearUsuario(req.body.nombre.trim(), req.body.email.trim().toLowerCase(), req.body.password, req.body.rol.trim())
        res.json({ mensaje: "Usuario creado correctamente" })

    } catch (error) {
        res.status(500).json({ mensaje: "Error interno del servidor" })

    }

})

// POST LOGIN
router.post("/login", async (req, res) => {

    try {
        const resultado = await login(req.body.email, req.body.password)
        res.json({ token: resultado.token, mensaje: resultado.mensaje })

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

        encontrado = await modificarUsuario(req.params.id, req.body.nombre.trim(), req.body.email.trim(), req.body.password.trim(), req.body.rol.trim())

        res.json(encontrado === null ? { mensaje: "Error: Usuario no encontrado" } : { dato: encontrado, mensaje: mensajes })

    }
})

// PATCH
router.patch("/:id", async (req, res) => {

    let encontrado = null
    let mensajes = []

    encontrado = await modificarUsuario(req.params.id, req.body.nombre.trim(), req.body.email.trim(), req.body.password.trim(), req.body.rol.trim())

    res.json(encontrado === null ? { mensaje: "Error: Usuario no encontrado" } : { dato: encontrado, mensaje: mensajes })

})

module.exports = router