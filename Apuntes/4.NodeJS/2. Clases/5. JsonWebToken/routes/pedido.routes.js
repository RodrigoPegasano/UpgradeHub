const express = require('express')
const router = express.Router()

const { obtenerTodos, crearPedido } = require('../controllers/pedido.controller')

// GET
router.get('/', async (req, res) => {

    const pedidos = await obtenerTodos()

    res.json(pedidos)

})

// POST
router.post('/', async (req, res) => {

    await crearPedido(req.body.usuario,
        req.body.producto,
        req.body.cantidad)

    res.json({ mensaje: "Pedido creado" })

})

module.exports = router