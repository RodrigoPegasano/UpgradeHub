const Pedido = require('../models/pedido.model')

async function obtenerTodos() {

    // El valor que le estamos dando a producto y comprados es el ID del producto y del usuario
    // El populate() hace que nos pase todo el objeto de ese ID y no solo el número del ID
    const pedidos = await Pedido.find().populate('producto', '-_id').populate('comprador', 'nombre email -_id')
    return pedidos

}

async function crearPedido(usuario, producto, cantidad) {

    const nuevoPedido = new Pedido({
        comprador: usuario,
        producto: producto,
        unidades: cantidad
    })

    await nuevoPedido.save()

    return nuevoPedido

}

module.exports = {
    obtenerTodos,
    crearPedido
}