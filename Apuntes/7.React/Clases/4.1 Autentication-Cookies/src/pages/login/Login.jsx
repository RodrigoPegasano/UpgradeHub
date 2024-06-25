import { useContext, useState } from "react"
import { SessionContext } from "../../contexts/SessionContext"

function Login() {

    const [datos, setDatos] = useState({ email: "", password: "" })

    // Para traer el login de context
    const { login, user } = useContext(SessionContext)

    // Esta función es para el onClick del button
    function doLogin() {
        login({...datos, rol: "Admin"})

        // Esto es para guardar el login y el token
        // Otro caos inventado
        /* axios.post("http://localhost:3000/usuarios/login", datos)
        .then((respuesta) => {
            if (respuesta.data.token) {
                login({...datos, password: null, rol: "User", token: respuesta.data.token})
            } else {
                setMensaje(respuesta.data.msg)
            }
        }) */
    }

    return (
        <>
            <h2>Login</h2>

            <input type="email" value={datos.email} onChange={(e) => setDatos({ ...datos, email: e.target.value })}></input>
            <input type="password" value={datos.password} onChange={(e) => setDatos({ ...datos, password: e.target.value })}></input>
            <button onClick={doLogin}>Login</button>
            {mensaje !== "" ? <p>{mensaje}</p> : ""}
        </>
    )
}

export default Login