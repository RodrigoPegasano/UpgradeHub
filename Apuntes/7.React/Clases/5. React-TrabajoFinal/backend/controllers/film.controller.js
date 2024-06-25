const Film = require("../models/film.model")

async function findAll(req, res) {
    try {
        const films = await Film.find()
        return res.json(films)
    } catch (error) {

    }
}

async function insert(req, res) {
    try {
        const newFilm = new Film({
            title: req.body.title,
            year: req.body.year,
            synopsis: req.body.synopsis,
            category: req.body.category,
            director: req.body.director
        })

        await newFilm.save()
        return res.json({ msg: "Película agregada" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Error al agregar la película"})
    }
}

async function deleteOne(req, res) {
    try {
        await Film.findByIdAndDelete(req.params.id)
        return res.json({msg: "Película eliminada"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Error al eliminar la película"})
    }
}

module.exports = {
    findAll,
    insert,
    deleteOne
}