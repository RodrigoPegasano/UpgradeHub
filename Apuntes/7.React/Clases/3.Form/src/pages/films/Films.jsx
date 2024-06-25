import { useState, useEffect } from "react";
import Item from "../../components/item/Item";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

function Films() {

    /* Array de peliculas */
    const [items, setItems] = useState([])

    // Utilizar db.json
    // Base de datos test
    // CÓDIGO QUE SE VA A EJECUTAR 1 SOLA VEZ TRAS LA CARGA DE LA PÁGINA
    useEffect(() => {
        // Opción 1 - Fetch
        /* fetch("http://localhost:3000/peliculas")
            .then((respuesta) =>
                respuesta.json()
                    .then((datos) => {
                        setItems(datos)
                    })) */

        // Opción 2 - Axios
        axios.get("http://localhost:3000/peliculas")
        .then((response) => {
            setItems([ ...items, ...response.data])
        })
    }, [])

    return (
        <>
            <h2>Películas</h2>
            <Container>
                <Row>
                    {items.map(i => <Item item={i}></Item>)}
                </Row>
            </Container>
        </>
    )

}

export default Films