import { useContext, useState } from "react"
import { SessionContext } from "../../contexts/SessionContext"

function Login() {

    const [datos, setDatos] = useState({ email: "", password: "" })

    // Para traer el login de context
    const { login, user } = useContext(SessionContext)

    // Esta función es para el onClick del button
    function doLogin() {
        login({...datos, rol: "Admin"})
    }

    return (
        <>
            <h2>Login</h2>

            <input type="email" value={datos.email} onChange={(e) => setDatos({ ...datos, email: e.target.value })}></input>
            <input type="password" value={datos.password} onChange={(e) => setDatos({ ...datos, password: e.target.value })}></input>
            <button onClick={doLogin}>Login</button>
        </>
    )
}

export default Login