// VALIDACIÓN PUT PRODUCTOS
function validarCrearProducto(body) {

    if (body.nombre === undefined ||
        body.nombre.trim() === "" ||
        body.talla === undefined ||
        body.talla.trim() === "" ||
        body.precio === undefined ||
        body.precio.trim() === "") {

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
        body.email.trim() === "" ||
        body.nombre === undefined ||
        body.nombre.trim() === "" ||
        body.apellido === undefined ||
        body.apellido.trim() === "" ||
        body.password === undefined ||
        body.password.trim() === "") {

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