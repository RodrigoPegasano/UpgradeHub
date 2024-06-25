import AccionesTarea from "../accionesTarea/accionesTarea"
import './tarea.css'
/* Importar libreria timeago-react */
/* El idioma de la librería lo importamos directamente en el main.jsx */
import TimeAgo from 'timeago-react'

function Tarea({ tarea, onTareaCambiada, onTareaBorrada }) {

    function cambiarEstado(e) {
        onTareaCambiada(tarea)
        console.log("Cambiando estado")
    }

    function borrar() {
        onTareaBorrada(tarea)
    }

    return (

        <li>
            <label className={[(tarea.hecha ? "tarea-hecha" : "tarea-pendiente"), (tarea.borrado === null ? "" : "tarea-eliminada")].join(" ")}>{tarea.texto}</label>
            {tarea.borrado === null ? <input type="checkbox" checked={tarea.hecha} onChange={cambiarEstado}></input> : ""}
            <button onClick={borrar}>{tarea.borrado === null ? "🗑️" : "🔁"}</button>
            {tarea.borrado === null ? "" : <label> Eliminado <TimeAgo datetime={tarea.borrado} locale='es' live={false}></TimeAgo></label>}
        </li>

    )
}

export default Tarea