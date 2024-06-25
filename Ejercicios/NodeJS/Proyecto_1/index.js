// FICHERO PARA CONTROLAR EL SERVIDOR
// La página que vamos a crear es una tienda de ropa
// Tendremos un archivo de usuarios y uno con los productos

// Express y BodyParser
const express = require('express');
const bodyParser = require('body-parser');

// Mongoose
const mongoose = require('mongoose');

// Importar routes de las colecciones creadas
const productosRoute = require('../Proyecto_1/routes/producto.route');
const usuariosRoute = require('../Proyecto_1/routes/usuario.route');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta de la base de datos en MongoDB
mongoose.connect('mongodb+srv://rodrigopegasano:Td2Hi37VEWcf4Tpg@cluster0.06zte4a.mongodb.net/proyecto_1')
.then(() => console.log('¡Servidor conectado!'));

// Importar colecciones creadas
app.use('/productos', productosRoute);
app.use('/usuarios', usuariosRoute);

// Puerta del servidor
app.listen(3000);