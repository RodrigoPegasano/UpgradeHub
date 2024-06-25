const express = require("express")
const router = express.Router()

// Controllers
const {login, signup} = require("../controllers/user.controller")

router.post("/signup", signup)

router.post("/login", login)

module.exports = router