// ROUTE PARA LOS PRODUCTOS DE LA PÁGINA

// Express
const express = require('express');

// Route
const router = express.Router();

const { buscarTodos, crearProducto, eliminarProducto, modificarProducto } = require('../controllers/producto.controller');

// GET (todos los productos que tenemos)
router.get("/", async (req, res) => {

    try {
        const productos = await buscarTodos();
        res.json(productos);

    } catch (error) {
        res.status(500).json({ mensaje: "Error del servidor" });

    }

})

// POST
router.post("/", async (req, res) => {

    await crearProducto(req.body.nombre.trim(),
        req.body.color.trim(),
        req.body.tipo.trim(),
        req.body.talla.trim(),
        req.body.precio.trim())

    res.json({ mensaje: "¡Producto creado correctamente!" })

})

// DELETE
router.delete("/:id", async (req, res) => {

    const productoBorrado = await eliminarProducto(req.params.id)

    if (productoBorrado) {
        res.json({ mensaje: "¡Producto borrado!" });

    } else {
        res.json({ mensaje: "Producto no encontrado :(" });

    }

})

// PATCH
router.patch("/:id", async (req, res) => {

    let encontrado = null
    let mensajes = []

    encontrado = await modificarProducto(req.params.id,
        req.body.nombre.trim(),
        req.body.color.trim(),
        req.body.tipo.trim(),
        req.body.talla.trim(),
        req.body.precio.trim())

    res.json(encontrado === null ? { mensaje: "Error: Producto no encontrado :(" } : { dato: encontrado, mensaje: mensajes })

})

module.exports = router;