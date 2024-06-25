const express = require('express')
const router = express.Router()

const { buscarTodos, buscarPorId, crearProducto, eliminarProducto, modificarProducto, buscarTodosQueContengan } = require('../controllers/producto.controller')

const { validarCrearProducto } = require('../helpers/validadores')

// GET ALL
router.get("/", async (req, res) => {

    // Utilizar el try and catch evita que se nos caiga el servidor
    try {
        let productos = []

        if (req.query.nombreContiene || req.query.marcaContiene) {
            const nombre = req.query.nombreContiene ? req.query.nombreContiene : ""
            const marca = req.query.marcaContiene ? req.query.marcaContiene : ""
            productos = await buscarTodosQueContengan(nombre, marca)

        } else {
            productos = await buscarTodos()
        }

        res.json(productos)

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

        const productoEncontrado = await buscarPorId(req.params.id)

        if (productoEncontrado) {
            res.json(productoEncontrado)
        } else {
            res.status(404).json({ mensaje: "Error: Producto no encontrado" })
        }

    } catch (error) {

        res.status(500).json({ mensaje: "Error interno del servidor" })

        // Podemos imprimir el error en modo String (nos muestra todos los datos del error)
        // res.status(500).json({ mensaje: String(error) })

    }

})

// POST
router.post("/", async (req, res) => {

    await crearProducto(req.body.nombre.trim(), req.body.marca.trim(), req.body.modelo)

    res.json({ mensaje: "Producto creado correctamente" })

})

// DELETE
router.delete("/:id", async (req, res) => {

    const productoBorrado = await eliminarProducto(req.params.id)

    if (productoBorrado) {
        res.json({ mensaje: "Producto borrado!" });
    } else {
        res.json({ mensaje: "Producto no encontrado" });
    }

})

// PUT
router.put("/:id", async (req, res) => {

    let encontrado = null
    let mensajes = []

    const resultadoValidacion = validarCrearProducto(req.body)

    if (!resultadoValidacion.valido) {

        res.status(400).json({ mensaje: resultadoValidación.mensaje })

    } else {

        encontrado = await modificarProducto(req.params.id, req.body.nombre.trim(), req.body.marca.trim())

        res.json(encontrado === null ? { mensaje: "Error: producto no encontrado" } : { dato: encontrado, mensaje: mensajes })

    }
})

// PATCH
router.patch("/:id", async (req, res) => {

    let encontrado = null
    let mensajes = []

    encontrado = await modificarProducto(req.params.id, req.body.nombre.trim(), req.body.marca.trim())

    res.json(encontrado === null ? { mensaje: "Error: producto no encontrado" } : { dato: encontrado, mensaje: mensajes })

})

module.exports = router