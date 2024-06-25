import { useState } from "react"

function InputTarea({ onAgregarTarea }) {

    const [texto, setTexto] = useState("")

    function agregarTarea() {
        /* Después de hacer clic en +, limpia el texto que está en el input */
        onAgregarTarea(texto)
        setTexto("")
    }

    return (
        <>
            <input type='text' value={texto} onChange={(e) => setTexto(e.target.value)} />
            <button onClick={agregarTarea}>➕</button>
        </>
    )
}

export default InputTarea
