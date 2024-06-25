// Reactividad
import { useState } from "react";
import Botones from '../botones/botones';

function Contador() {
    // Esto es necesario para utilizar reactividad
    // Es decir, le debemos asignar la constante inicial y el valor que cambiará
    // useState contiene el valor inicial
    const [contador, setContador] = useState(0);

    function sumar() {
        setContador(contador + 1)
    }

    function restar() {
        setContador(contador - 1)
    }

    return (
        <>
            <h5>
                {contador}
            </h5>

            {/* Botones del contador en contador.jsx o en botones.jsx */}
            {/* OPCIÓN 1:
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button> */}

            {/* OPCIÓN 2: */}
            <Botones onSumar={sumar} onRestar={restar}></Botones>
        </>
    )

}

export default Contador