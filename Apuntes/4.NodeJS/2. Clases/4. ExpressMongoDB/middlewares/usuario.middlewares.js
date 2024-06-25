// Helpers
const { validarCrearUsuario } = require('../helpers/validadores')

function middlewareCrearUsuario(req, res, next) {

    const resultadoValidacion = validarCrearUsuario(req.body)

    if (resultadoValidacion.valido) {
        next()

    } else {
        res.status(400).json({ mensaje: resultadoValidacion.mensaje })

    }

}

function middlewareEmailValidacion(req, res, next) {

    if (req.body.email.includes("@")) {
        next()

    } else {
        res.status(400).json({ mensaje: "Email no es válido" })

    }
}

module.exports = {
    middlewareCrearUsuario,
    middlewareEmailValidacion
}