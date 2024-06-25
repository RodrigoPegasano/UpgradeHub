// VALIDACIÓN PUT PRODUCTOS
function validarCrearProducto(body) {

    if (body.marca === undefined ||
        body.marca.trim() === "" ||
        body.nombre === undefined ||
        body.nombre.trim() === "") {

        return {
            valido: false,
            mensaje: "Falta nombre o marca"
        }

    } else {

        return {
            valido: true,
            mensaje: null
        }

    }

}

// VALIDACIÓN PUT USUARIOS
function validarCrearUsuario(body) {

    if (body.email === undefined ||
        body.email.trim() === "") {

        return {
            valido: false,
            mensaje: "Falta nombre, email o password"
        }

    } else {

        return {
            valido: true,
            mensaje: null
        }

    }

}

module.exports = {
    validarCrearProducto,
    validarCrearUsuario
}