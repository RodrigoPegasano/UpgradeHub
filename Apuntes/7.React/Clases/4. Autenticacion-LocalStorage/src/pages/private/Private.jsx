import { useContext } from "react"
import { SessionContext } from "../../contexts/SessionContext"

function Private() {

    const { user } = useContext(SessionContext)

    return (
        <>
            <h2>Private</h2>
            <p>Hola {user.email}</p>
        </>
    )
}

export default Private