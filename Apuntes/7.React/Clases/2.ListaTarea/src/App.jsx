import './App.css'
import InputTarea from './components/inputTarea/inputTarea'
import ListaTareas from './components/listaTareas/listaTareas'
import { useState } from 'react'

function App() {

  const [tareas, setTareas] = useState([
    { texto: "Comprar pan", hecha: false, borrado: null },
    { texto: "Comprar leche", hecha: false, borrado: null }
  ])

  function intentarAgregarTarea(textoTarea) {
    /* Primero que compruebe que no está vacío. Comprobar en el string consume más recursos y tarda más */
    if (textoTarea !== "" && tareas.find(x => x.texto === textoTarea) === undefined) {
      setTareas([...tareas, { texto: textoTarea, hecha: false, borrado: null }])
      console.log(tareas)
    }
  }

  /* Función para cambiar el valor de la tarea hecha o no */
  function cambiarEstadoTarea(tareaCambiar) {
    setTareas(tareas.map(t => {
      if (t.texto === tareaCambiar.texto) {
        return { ...t, hecha: !t.hecha }
      } else {
        return t
      }
    }))
  }

  /* Función para borrar una tarea por completo */
  /* function borrarTarea(tareaBorrar) {
    setTareas(tareas.filter(t => t.texto !== tareaBorrar.texto))
  } */

  /* Función para borrar una tarea pero guardar su registro */
  function borrarTareaSoft(tareaBorrar) {
    setTareas(tareas.map(t => {
      if (t.texto === tareaBorrar.texto) {
        if (t.borrado !== null) {
          t.borrado = null
        } else {
          t.borrado = new Date()
        }
      }
      return t
    }))
  }

  return (
    <>
      {/* Titulo y nos muestra en tiempo real cuantas tareas tenemos creadas */}
      <h1>Lista de tareas ({tareas.filter(x => x.borrado === null).length})</h1>
      {/* Nos muestra en tiempo real cuantas tareas tenemos pendientes y cuantas realizadas */}
      <h5>Completadas: {tareas.filter(x => x.borrado === null).filter(x => x.hecha).length}</h5>
      <h5>Pendientes: {tareas.filter(x => x.borrado === null).filter(x => !x.hecha).length}</h5>
      <InputTarea onAgregarTarea={intentarAgregarTarea}></InputTarea>
      <ListaTareas onTareaCambiada={cambiarEstadoTarea} onTareaBorrada={borrarTareaSoft} tareas={tareas.filter(t => t.borrado === null)}></ListaTareas>

      <hr></hr>

      {/* Mostrar tareas borradas */}
      <h2 >Lista de tareas ({tareas.filter(x => x.borrado !== null).length})</h2>
      <ListaTareas onTareaCambiada={cambiarEstadoTarea} onTareaBorrada={borrarTareaSoft} tareas={tareas.filter(t => t.borrado !== null)}></ListaTareas>
    </>
  )
}

export default App