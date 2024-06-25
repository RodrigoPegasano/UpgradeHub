import './App.css'
import { Routes, Route, Link, Navigate } from "react-router-dom"
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Films from './pages/films/Films'
import Home from './pages/home/Home'
import { useContext, useEffect } from 'react'
import { SessionContext } from './context/SessionContext'
import { useTranslation } from "react-i18next"

function App() {

  const { logout, user } = useContext(SessionContext)
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(i18n.language)
  }, [])

  function changeLang(e) {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <select onChange={changeLang}>
              <option selected={"en" === i18n.language} value="en">English</option>
                <option selected={"es" === i18n.language} value="es">Español</option>
                <option selected={"pt" === i18n.language} value="pt">Português</option>
              </select>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? '' : <li><Link to="/login">Login</Link></li>}
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            {user ? <li><Link to="/films">Films</Link></li> : ""}
            {user ? <button className='btn btn-outline-danger' onClick={logout}>Logout</button> : ""}
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={user ? <Navigate to="/films"></Navigate> : <Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='films' element={<Films></Films>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
