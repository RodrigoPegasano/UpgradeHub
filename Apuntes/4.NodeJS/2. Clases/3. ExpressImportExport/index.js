// ARCHIVO EXPRESS QUE SE UTILIZA CON LOS FICHEROS DENTRO DE LA CARPETA "routes"
const express = require('express');
const bodyParser = require('body-parser');

// Importar productos.routes y usuarios.routes
const productosRoute = require('./routes/producto.routes');
const usuariosRoute = require('./routes/usuario.routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importar productos.routes
app.use('/productos', productosRoute);

// Importar usuarios.routes
app.use('/usuarios', usuariosRoute);

app.listen(3000);