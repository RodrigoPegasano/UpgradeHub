import { useState } from "react";
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

function Formulario({ onInsertarItem }) {

    const INITIAL_STATE = { descripcion: "", foto: "", year: "" }

    const [dato, setDato] = useState(INITIAL_STATE)

    /* Cambiar descripción, year y foto */
    function cambiarAtributo(e, atributo) {
        setDato({ ...dato, [atributo]: e.target.value })
    }

    function insertar() {
        onInsertarItem(dato)
        setDato(INITIAL_STATE)
    }

    return (

        <Form>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group>
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control type="text" value={dato.descripion} onChange={(e) => cambiarAtributo(e, 'descripcion')}></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <Form.Group>
                            <Form.Label>Año:</Form.Label>
                            <Form.Control type="number" value={dato.year} onChange={(e) => cambiarAtributo(e, 'year')}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Foto:</Form.Label>
                            <Form.Control type="text" value={dato.foto} onChange={(e) => cambiarAtributo(e, 'foto')}></Form.Control>
                        </Form.Group>
                        {/* Para que nos muestre una previa de la imagen que vamos a subir */}
                        <img width={50} src={dato.foto}></img>
                    </Col>
                </Row>

                <Row className="my-3" >
                    <Col>
                        <Button onClick={insertar}>Guardar</Button>
                    </Col>
                </Row>
            </Container>
        </Form>

    )

}

export default Formulario;