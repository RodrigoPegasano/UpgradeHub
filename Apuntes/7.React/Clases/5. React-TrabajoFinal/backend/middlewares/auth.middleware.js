const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

async function isAuthenticated(req, res, next) {
    const token = req.query.token
    if (!token) {
        return res.status(401).json({ msg: "No estás autenticado" })
    } else {
        const tokenDecoded = jwt.verify(token, "DXdd21@ace4")
        const userId = tokenDecoded.userId
        const foundUser = await User.findById(userId)

        if (!foundUser) {
            res.status(401).json({ msg: "Token invalido" })
        } else {
            next()
        }
    }
}

async function isAdmin(req, res, next) {
    const token = req.query.token
    if (!token) {
        return res.status(401).json({ msg: "No estás autenticado" })
    } else {
        const tokenDecoded = jwt.verify(token, "DXdd21@ace4")
        const userId = tokenDecoded.userId
        const foundUser = await User.findById(userId)

        if (!foundUser) {
            res.status(401).json({ msg: "Token invalido" })
        } else {
            if (foundUser.role !== "admin") {
                return res.status(403).json({ msg: "No autorizado" })
            } else {
                next()
            }
        }
    }
}

module.exports = {
    isAuthenticated,
    isAdmin
}