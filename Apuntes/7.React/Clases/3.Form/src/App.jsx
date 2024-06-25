import { useEffect, useState } from 'react'
import Formulario from './components/form/Formulario'
import Item from './components/item/Item'
import { Container, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/index/Index'
import Contact from './pages/contact/Contact'
import NavBar from './pages/navBar/NavBar'
import Peliculas from './pages/films/Films'
import InsertFilms from './pages/insertFilms/InsertFilms'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <Container>
        <Routes>
          <Route path='/' element={<Index></Index>}></Route>
          <Route path='/peliculas' element={<Peliculas></Peliculas>}></Route>
          <Route path='/contacto' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/agregar-pelicula' element={<InsertFilms></InsertFilms>}></Route>
        </Routes>
      </Container>

      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
