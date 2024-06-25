// .ENV
require('dotenv').config()
// ARCHIVO EXPRESS QUE SE UTILIZA CON LOS FICHEROS DENTRO DE LA CARPETA "routes"
const express = require('express');
const bodyParser = require('body-parser');
// Importar producto.routes, usuario.routes y pedido.routes
const productosRoute = require('./routes/producto.routes');
const usuariosRoute = require('./routes/usuario.routes');
const pedidosRoute = require('./routes/pedido.routes');
const indexRoute = require('./routes/index.routes')
// Mongoose
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Json Web Token
app.set("secretKey", process.env.JWTSECRET)

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => console.log('Connected!'))
    .catch(error => console.log('Error'))

// Importar index.routes
app.use('/', indexRoute);

// Importar producto.routes
app.use('/productos', productosRoute);

// Importar usuario.routes
app.use('/usuarios', usuariosRoute);

// Importar pedido.routes
app.use('/pedidos', pedidosRoute);

app.listen(process.env.PORT);