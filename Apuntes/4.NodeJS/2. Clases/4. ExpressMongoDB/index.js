// ARCHIVO EXPRESS QUE SE UTILIZA CON LOS FICHEROS DENTRO DE LA CARPETA "routes"
const express = require('express');
const bodyParser = require('body-parser');
// Importar producto.routes, usuario.routes y pedido.routes
const productosRoute = require('./routes/producto.routes');
const usuariosRoute = require('./routes/usuario.routes');
const pedidosRoute = require('./routes/pedido.routes');
// Mongoose
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://rodrigopegasano:zjKDRpn730Us74d5@cluster0.eraketb.mongodb.net/electrosa')
.then(() => console.log('Connected!'));

// Importar producto.routes
app.use('/productos', productosRoute);

// Importar usuario.routes
app.use('/usuarios', usuariosRoute);

// Importar pedido.routes
app.use('/pedidos', pedidosRoute);

app.listen(3000);