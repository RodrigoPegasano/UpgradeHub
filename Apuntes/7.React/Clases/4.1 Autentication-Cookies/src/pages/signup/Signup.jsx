// React
import { useState } from "react"

// Axios
import axios from "axios"

// CSS
import './Signup.css'

export default function Signup() {

    const [datos, setDatos] = useState({ email: "", password: "", password2: "" })
    const [mensajeError, setMensajeError] = useState("")

    // Para crear un usuario y que guarde los datos en la base de datos
    // El profesor hizo un caos utilizando lo creado
    // json-server-auth NO FUNCIONA MÁS
    function crearUsuario() {
        axios.post("http://localhost:3000/usuarios", datos)
        .then((respuesta) => {
            console.log(respuesta)
        })
    }

    return (
        <>
            <div className="crear-usuario">
                <h2>Crear usuario</h2>

                <div className="crear-usuario-form">
                    <input value={datos.email} onChange={(e) => setDatos({ ...datos, email: e.target.value })} placeholder="Correo electrónico" type="email"></input>
                    <input value={datos.password} onChange={(e) => setDatos({ ...datos, password: e.target.value })} placeholder="Contraseña" type="password"></input>
                    <input value={datos.password2} onChange={(e) => setDatos({ ...datos, password2: e.target.value })} placeholder="Repetir contraseña" type="password"></input>

                    <button disabled={datos.password !== datos.password2} onClick={crearUsuario}>Crear usuario</button>
                    {datos.password !== datos.password2 ? <p className="password-error">Las contraseñas no coinciden</p> : ""}
                </div>
            </div>
        </>
    )

}