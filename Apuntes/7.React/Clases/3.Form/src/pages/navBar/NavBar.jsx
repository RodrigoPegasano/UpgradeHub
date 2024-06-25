import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Films</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Inicio</Link>
                            <Link className="nav-link" to="/peliculas">Películas</Link>
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <NavDropdown title="Más" id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="/agregar-pelicula">Agregar película</Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default NavBar