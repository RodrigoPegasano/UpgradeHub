import Formulario from "../../components/form/Formulario"
import axios from "axios";

function InsertFilms() {

    // Agregar y guardar nuevas peliculas a la base de datos
    function insertarItem(item) {
        // Opción 1 - Fetch
        /* fetch("http://localhost:3000/peliculas", {
            method: "POST",
            body: JSON.stringify(item)
        }).then(() => {
            alert("Película añadida correctamente!")
        }).catch((error) => {
            alert("Error al subir la pelicula")
            console.log(error)
        }) */

        // Opción 2 - Axios
        axios.post("http://localhost:3000/peliculas", item)
            .then(() => {
                alert("Película añadida correctamente!")
            }).catch((error) => {
                alert("Error al subir la pelicula")
                console.log(error)
            })
    }

    return (
        <>
            <h2>Agregar nueva película</h2>
            <Formulario onInsertarItem={insertarItem}></Formulario>
        </>
    )

}

export default InsertFilms