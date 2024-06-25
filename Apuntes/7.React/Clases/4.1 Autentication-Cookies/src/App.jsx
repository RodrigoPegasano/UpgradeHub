// CSS
import './App.css'

// React
import { useContext } from 'react'
import { Link, Routes, Route, Navigate } from "react-router-dom"

// Pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Private from './pages/private/Private'
import Public from './pages/public/Public'

// Context
import { SessionContext } from './contexts/SessionContext'
import NotFound from './pages/notFound/NotFound'
import Admin from './pages/admin/Admin'
import { CookieAcceptContext } from './contexts/CookieAcceptContext'
import Signup from './pages/signup/Signup'


function App() {

  const { decision, aceptar, rechazar } = useContext(CookieAcceptContext)
  const { user, logout } = useContext(SessionContext)

  // Condición en caso de que el usuario no acepte las cookies.
  if (decision === 2) {

    return (
      <>
        <div>
          <h2>Debes aceptar las cookies para que la página funcione</h2>
          <button onClick={aceptar}>Aceptar</button>
        </div>
      </>
    )

  } else {

    return (
      <>
        <header>
          <ul>
            <li>
              <Link className='link' to='/'>Home</Link>
            </li>

            {/* Si el usuario no está loggeado, aparece la página de login en el navegador */}
            {/* Si el usuario está loggeado, no aparece*/}
            {user ? '' : <li><Link className='link' to='/login'>Login</Link></li>}

            {/* Si el usuario no está loggeado, aparece la página de login en el navegador */}
            {/* Si el usuario está loggeado, no aparece*/}
            {user ? '' : <li><Link className='link' to='/signup'>Crear usuario</Link></li>}

            {/* Si el usuario no está loggeado, no aparece en el navegador */}
            {/* Si el usuario está loggeado, aparece */}
            {user ? <li><Link className='link' to='/area-privada'>Área privada</Link></li> : ''}

            <li>
              <Link className='link' to='/area-publica'>Área pública</Link>
            </li>

            {user && user.rol === "Admin" ? <li><Link className='link' to='/area-admin'>Área admin</Link></li> : ''}

            {user ? <li><button onClick={logout}>Logout</button></li> : ''}
          </ul>
        </header>

        <main>
          <Routes>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={user ? <Navigate to='/area-privada'></Navigate> : <Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/area-privada' element={user ? <Private></Private> : <Navigate to='/login'></Navigate>}></Route>
            <Route path='/area-publica' element={<Public></Public>}></Route>
            <Route path='/area-admin' element={user && user.rol === "Admin" ? <Admin></Admin> : <NotFound></NotFound>}></Route>
          </Routes>

        </main>


        <footer>
          {decision === 0 ?
            <div className='cookie-ask'>
              <div className='cookie-content'>
                <h3>Deseas aceptar las cookies?</h3>
                <p>Al hacer clic en “Aceptar”, aceptas que las cookies se guarden en tu dispositivo para mejorar la navegación de la página web, analizar el uso de la misma, y colaborar con nuestros estudios para marketing.</p>
                <button className='cookie-button' onClick={aceptar}>Aceptar</button>
                <button className='cookie-button' onClick={rechazar}>Rechazar</button>
              </div>
            </div> : ""
          }

          <div className='footer'>
            Copyright 2023-2024 - Mi página
          </div>
        </footer>
      </>
    )
  }

}

export default App