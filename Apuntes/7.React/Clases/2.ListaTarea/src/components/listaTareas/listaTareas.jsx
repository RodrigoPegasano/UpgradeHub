import Tarea from "../tarea/tarea"

function ListaTareas({ tareas, onTareaCambiada, onTareaBorrada }) {

    return (

        <ul>
            {tareas.map((x, idx) => <Tarea onTareaCambiada={onTareaCambiada} onTareaBorrada={onTareaBorrada} key={idx} tarea={x}></Tarea>)}
        </ul>

    )
}

export default ListaTareas