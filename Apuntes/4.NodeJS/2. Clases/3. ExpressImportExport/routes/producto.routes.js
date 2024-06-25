const express = require('express');
const router = express.Router();

const productos = [{ id: 1, nombre: "Lavadora", marca: "Bosch", ref: "0101020023L" }];

// GET
// Muestra la página de productos y todos los productos que tenga dentro
router.get("/", (req, res) => {
    res.json(productos);
})

// Nos muestra en la página de productos, el producto con el id que pongamos
// Si el id existe, nos devuelve el produto, se no existe, nos devuelve un error
router.get("/:id", (req, res) => {

    const objetoEncontrado = productos.find(p => p.id === Number(req.params.id));

    if (objetoEncontrado != undefined) {
        res.json(objetoEncontrado);
    } else {
        res.json({ mensaje: "Error: Producto no encontrado" });
    }

})

// POST
// Sirve para agregar un nuevo producto dentro de la página productos
router.post("/", (req, res) => {

    req.body.id = productos.length + 1;
    productos.push(req.body);
    res.json({ mensaje: "Esto es un post" });

})

// DELETE
// Sirve para eliminar un producto dentro de la página productos
router.delete("/:id", (req, res) => {

    const indice = productos.findIndex(x => x.id === Number(req.params.id))

    // El findIndex por defecto, si no encuentra un elemento en la posición pasada, elimina el último elemento utilizando el -1
    // Para que no haga eso, le ponemos la siguiente condición:
    if (indice === -1) {
        res.json({ mensaje: "Producto no encontrado" });
    } else {
        productos.splice(indice, 1);
        res.json({ mensaje: "Producto borrado!" });
    }

})

// PUT
// Modifica el elemento
// Desventaja: Si alguno de los campos que pueden ser editados no recibe ningún nuevo valor, lo "borra" del objeto/array. Lo deja como undefined.
router.put("/:id", (req, res) => {

    let encontrado = null;
    let mensajes = [];

    // Comprobamos que todos los campos que se pueden editar tienen valor
    // el trim() elimina los espacios en blanco que están de sobra
    if (req.body.brand === undefined || req.body.brand.trim() === "" || req.body.name === undefined || req.body.name.trim() === "") {

        res.json({ mensaje: "No se han proporcionado todos los valor" });

    } else {

        for (const producto of productos) {
            if (producto.id === Number(req.params.id)) {
                producto.nombre = req.body.name.trim();
                producto.marca = req.body.brand.trim();

                mensajes.push(`Nombre modificado ${producto.nombre} -> ${req.body.name.trim()}`);
                mensajes.push(`Marca modificada ${producto.marca} -> ${req.body.brand.trim()}`);

                encontrado = producto;
                // El break lo utilizamos para que deje de buscar una vez que ya encontró el elemento
                // Nos ahorra tiempo y mejora el rendimiento/velocidad de la web
                break;
            }
        }

        res.json(encontrado === null ? { mensaje: "Error: producto no encontrado" } : { dato: encontrado, mensaje: mensajes });

    }
})

// PATCH
// Modifica el elemento
// Ventaja: Si alguno de los campos que se pueden editar no recibe ningún nuevo valor, lo deja como estaba.
router.patch("/:id", (req, res) => {

    let encontrado = null;
    let mensajes = [];

    for (const producto of productos) {

        if (producto.id === Number(req.params.id)) {

            if (req.body.name != undefined && req.body.name.trim() != "") {
                mensajes.push(`Nombre modificado ${producto.nombre} -> ${req.body.name.trim()}`);
                producto.nombre = req.body.name.trim();
            }

            if (req.body.brand != undefined && req.body.brand.trim() != "") {
                mensajes.push(`Marca modificada ${producto.marca} -> ${req.body.brand.trim()}`);
                producto.marca = req.body.brand.trim();
            }

            encontrado = producto;

            break;
        }
    }

    res.json(encontrado === null ? { mensaje: "Error: producto no encontrado" } : { dato: encontrado, mensaje: mensajes });

})

module.exports = router;