import { Card, ListGroup } from "react-bootstrap"

function Item({ item }) {

    return (
        <Card className="mx-3 my-3 pt-2" style={{ width: '220px' }}>
            <Card.Img height={250} src={item.foto}></Card.Img>
            <Card.Body>
                <Card.Title>{item.descripcion}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Descripcion de la pelicula...</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{item.year}</ListGroup.Item>
            </ListGroup>
        </Card>
    )

}

export default Item