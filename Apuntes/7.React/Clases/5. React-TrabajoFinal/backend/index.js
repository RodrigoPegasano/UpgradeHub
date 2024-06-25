// Importar express y mongoose
const express = require("express")
const mongoose = require("mongoose")

// Cors
const cors = require("cors")

// Routes
const userRoutes = require("./routes/user.routes")
const filmRoutes = require("./routes/film.routes")

const app = express()

app.use(cors())

// Habilita pasar datos a través de post
app.use(express.json())

// Conectar a mongoose
mongoose.connect("mongodb+srv://rodrigopegasano:IjDzLNz0UqyG7LE5@cluster0.eraketb.mongodb.net/peliculas")
.then(() => {
    console.log("Conectado a la base de datos con éxito")
})
.catch((err) => {
    console.log(`Error al conectar con la base de datos: ${err}`)
})

app.use("/api/users", userRoutes)
app.use("/api/films", filmRoutes)

// Ejecutar la app
app.listen(3000, () => {
    console.log("API funcionando...")
})