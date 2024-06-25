// ESTRUCTURA Y MODELO DE LOS USUARIOS

// Mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    // Nombre = Rodrigo, Matias...
    nombre: {
        type: String,
        require: true
    },
    // Apellido: Pegasano, Martinez...
    apellido: {
        type: String,
        require: true
    },
    // Email: matias@gmail.com, ainhoa@gmail.com...
    email: {
        type: String,
        require: true
    },
    // Password: 1234, 12ac4, 34Ef2...
    password: {
        type: String,
        require: true
    },
    // DNI: 40993458N, 34593859J...
    dni: {
        type: String,
        require: false
    }
})

const Usuarios = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuarios;