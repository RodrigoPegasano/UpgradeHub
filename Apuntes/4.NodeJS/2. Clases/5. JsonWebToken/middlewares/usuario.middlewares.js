// .env
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Controllers
const { buscarPorId, buscarUnoPorMail } = require('../controllers/usuario.controller')

// Helpers
const { validarCrearUsuario } = require('../helpers/validadores')

// CREAR USUARIO
function middlewareCrearUsuario(req, res, next) {

    const resultadoValidacion = validarCrearUsuario(req.body)

    if (resultadoValidacion.valido) {
        next()

    } else {
        res.status(400).json({ mensaje: resultadoValidacion.mensaje })

    }

}

// VALIDACIÓN DEL EMAIL
function middlewareEmailValidacion(req, res, next) {

    if (req.body.email.includes("@")) {
        next()

    } else {
        res.status(400).json({ mensaje: "Email no es válido" })

    }
}

// VERIFICAR LOGIN
function middlewareEstaLoggeado(req, res, next) {
    // usuarios/zona-privada/perfil/id_number?token=1234
    if (req.query.token) {

        try {
            const resultado = jwt.verify(req.query.token, process.env.JWTSECRET)
            if (resultado.id == req.params.id) {
                next()
            } else {
                res.status(403).json({ mensaje: "No tienes permiso para acceder a este perfil" })
            }
        } catch (error) {
            res.status(401).json({ mensaje: "Token no valido" })
        }

    } else {
        res.status(400).json({ mensaje: "No has proporcionado el token" })
    }
}

// VERIFICAR SI ES ADMIN
async function middlewareEsAdmin(req, res, next) {
    // usuarios/zona-admin/home?token=1234
    if (req.query.token) {

        try {
            const resultado = jwt.verify(req.query.token, process.env.JWTSECRET)
            const usuarioEncontrado = await buscarPorId(resultado.id)

            if (usuarioEncontrado.rol == "Admin") {
                next()
            } else {
                res.status(403).json({ mensaje: "No tienes permiso para acceder a este perfil" })
            }
        } catch (error) {
            res.status(401).json({ mensaje: "Token no valido" })
        }

    } else {
        res.status(400).json({ mensaje: "No has proporcionado el token" })
    }
}

// EMAIL YA EXISTE
async function middlewareEmailDuplicado(req, res, next) {
    const usuarioMismoMail = await buscarUnoPorMail(req.body.email)

    if(usuarioMismoMail) {
        res.json({mensaje: "Este email ya existe"})
    } else {
        next()
    }
}

module.exports = {
    middlewareCrearUsuario,
    middlewareEmailValidacion,
    middlewareEstaLoggeado,
    middlewareEsAdmin,
    middlewareEmailDuplicado
}