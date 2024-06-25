const express = require('express');
const router = express.Router();

const usuarios = [{id: 1, nombre: "Rodrigo", email: "rodrigo@gmail.com"}];

// GET
// Muestra la página de usuarios y todos los usuarios que tenga dentro
router.get("/", (req, res) => {
    res.json(usuarios);
})

// Nos muestra en la página de usuarios, el usuario con el id que pongamos
// Si el id existe, nos devuelve el usuario, se no existe, nos devuelve un error
router.get("/:id", (req, res) => {

    const usuarioEncontrado = usuarios.find(p => p.id === Number(req.params.id));

    if (usuarioEncontrado != undefined) {
        res.json(usuarioEncontrado);
    } else {
        res.json({ mensaje: "Error: Usuario no encontrado" });
    }

})

// POST
// Sirve para agregar un nuevo usuarios dentro de la página usuarios
router.post("/", (req, res) => {

    req.body.id = usuarios.length + 1;
    usuarios.push(req.body);
    res.json({ mensaje: "Esto es un post" });

})

// DELETE
// Sirve para eliminar un usuario dentro de la página usuarios
router.delete("/:id", (req, res) => {

    const indice = usuarios.findIndex(x => x.id === Number(req.params.id))

    // El findIndex por defecto, si no encuentra un elemento en la posición pasada, elimina el último elemento utilizando el -1
    // Para que no haga eso, le ponemos la siguiente condición:
    if (indice === -1) {
        res.json({ mensaje: "Usuario no encontrado" });
    } else {
        usuarios.splice(indice, 1);
        res.json({ mensaje: "Usuario borrado!" });
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
    if (req.body.email === undefined || req.body.email.trim() === "" || req.body.name === undefined || req.body.name.trim() === "") {

        res.json({ mensaje: "No se han proporcionado todos los valor" });

    } else {

        for (const usuario of usuarios) {
            if (usuario.id === Number(req.params.id)) {
                usuario.nombre = req.body.name.trim();
                usuario.email = req.body.email.trim();

                mensajes.push(`Nombre modificado ${usuario.nombre} -> ${req.body.name.trim()}`);
                mensajes.push(`Email modificado ${usuario.email} -> ${req.body.email.trim()}`);

                encontrado = usuario;
                // El break lo utilizamos para que deje de buscar una vez que ya encontró el elemento
                // Nos ahorra tiempo y mejora el rendimiento/velocidad de la web
                break;
            }
        }

        res.json(encontrado === null ? { mensaje: "Error: Usuario no encontrado" } : { dato: encontrado, mensaje: mensajes });

    }
})

// PATCH
// Modifica el elemento
// Ventaja: Si alguno de los campos que se pueden editar no recibe ningún nuevo valor, lo deja como estaba.
router.patch("/:id", (req, res) => {

    let encontrado = null;
    let mensajes = [];

    for (const usuario of usuarios) {

        if (usuario.id === Number(req.params.id)) {

            if (req.body.name != undefined && req.body.name.trim() != "") {
                mensajes.push(`Nombre modificado ${usuario.nombre} -> ${req.body.name.trim()}`);
                usuario.nombre = req.body.name.trim();
            }

            if (req.body.email != undefined && req.body.email.trim() != "") {
                mensajes.push(`Email modificado ${usuario.marca} -> ${req.body.email.trim()}`);
                usuario.marca = req.body.email.trim();
            }

            encontrado = usuario;

            break;
        }
    }

    res.json(encontrado === null ? { mensaje: "Error: Usuario no encontrado" } : { dato: encontrado, mensaje: mensajes });

})

module.exports = router;