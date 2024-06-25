import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import withReactContent from 'sweetalert2-react-content'
import './App.css'
import Swal from 'sweetalert2'

function App() {

  const [contador, setContador] = useState(0)

  // SweetAlert
  function showModal() {
    Swal.fire({
      title: 'titulo',
      position: 'center',
      icon: 'error',
      timer: 2000,
      showConfirmButton: false
    })
  }

  return (
    <>
      <h1>CONTADOR</h1>

      <button onClick={() => setContador(contador + 1)}>+</button>

      <button onClick={() => setContador(contador - 1)}>-</button>

      <h2 data-testid="contador">{contador}</h2>

      <button onClick={showModal}>Abrir alert</button>
    </>
  )
}

export default App