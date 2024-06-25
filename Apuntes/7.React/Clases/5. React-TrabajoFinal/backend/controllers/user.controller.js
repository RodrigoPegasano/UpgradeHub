const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

// Login
async function login(req, res) {
    try {
        const foundUser = await User.findOne({ email: req.body.email })
        if (!foundUser) {
            // Usuario no coincide
            return res.status(400).json({ msg: "Usuario incorrecto" })
        } else {
            const resultCompare = await bcrypt.compare(req.body.password, foundUser.password)
            if (!resultCompare) {
                // Contraseña incorrecta
                return res.status(400).json({ msg: "Contraseña incorrecta" })
            } else {
                const token = jwt.sign({ userId: foundUser._id }, "DXdd21@ace4", { expiresIn: "1h" })
                return res.status(200).json({ msg: "Ok", token: token })
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Error al hacdr login" })
    }
}

// Signup
async function signup(req, res) {
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({ email: req.body.email, password: hash, role: 'user', name: req.body.name })
        await newUser.save()
        return res.json({ msg: "Registro completado correctamente" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Error al registrarse" })
    }
}

module.exports = {
    login,
    signup
}