import { Form, Container, Row, Col, Button } from "react-bootstrap";

function Login() {

    return (
        <>
            <Form>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text"></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col sm={12} md={12} lg={12}>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="my-3" >
                        <Col>
                            <Button>Login</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )

}

export default Login