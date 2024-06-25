import { createContext, useEffect, useState } from "react";

// Esta linea crea el contexto y lo exportamos para que podamos utilizarlo desde cualquier parte
// de nuestra aplicación que esté envuelta por el contexto
export const SessionContext = createContext()

// Esta linea genera nuestro propio provider
// La prop 'children' es básicamente todo lo que le pongamos dentro del provider
export function SessionProvider({ children }) {

    const [user, setUser] = useState(null)

    // useEffect
    // El [] vacío al final es para que solo se ejecute una vez
    useEffect(() => {
        // Permite que el usuario siga loggeado al recargar la página
        const posibleUsuario = localStorage.getItem("user")

        if (posibleUsuario !== null) {
            setUser(JSON.parse(posibleUsuario))
        }
    }, [])

    // Función para cuando hace login
    function login(user) {
        /* Una vez que el usuario hizo login, se le envía a area privada */
        setUser(user)
        // Guarda el usuario y la contraseña que acaba de hacer login
        localStorage.setItem("user", JSON.stringify(user))
    }

    // Función para cuando hace logout
    function logout() {
        setUser(null)
        // Si el usuario hizo logout, borra el usuario para que al recargar la página se le pida de nuevo que haga login
        localStorage.removeItem("user")
    }

    return (
        <SessionContext.Provider value={{ user, login, logout }}>
            {children}
        </SessionContext.Provider>
    )
}