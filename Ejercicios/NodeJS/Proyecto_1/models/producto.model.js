// ESTRUCTURA Y MODELO DE LOS PRODUCTOS

// Mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productoSchema = new Schema({
    // Nombre = camiseta, camisa, pantalón, sudadera, chaqueta...
    nombre: {
        type: String,
        require: true
    },
    // Color: Rojo, Azul, Amarillo...
    color: {
        type: String,
        require: false
    },
    // Tipo: Verano, Invierno, Deportes, Pijamas...
    tipo: {
        type: String,
        require: false
    },
    // Talla: XS, S, M, L, XL...
    talla: {
        type: String,
        require: true
    },
    // Precio: 50, 10.99, 12...
    precio: {
        type: String,
        require: true
    }
})

const Productos = mongoose.model("productos", productoSchema);

module.exports = Productos;