const express = require("express")
const router = express.Router()

// Controllers
const { findAll, insert, deleteOne } = require("../controllers/film.controller")

// Middlewares
const { isAuthenticated, isAdmin } = require("../middlewares/auth.middleware")

router.get("/", isAuthenticated, findAll)

router.post("/", isAdmin, insert)

router.delete("/:id", isAdmin, deleteOne)

module.exports = router