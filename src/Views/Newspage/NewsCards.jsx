import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image3 from "../../Assets/Images/stap3.jpg"
import { Link } from "react-router-dom";
const NewsCards = ({newsData}) => {
    return (
        <div>
        <div className="container text-center">
            <h3 className="border-bottom mx-auto">Latest News</h3>
        </div>
        <Container>
        <Row>
        {newsData.map ((content, index) =>
        <Col className="col-md-3" key={index}>
        <Link className="text-decoration-none text-dark" to={`/product/${content.id}`}>
        <Card>
            <Card.Img variant="top" src={Image3} />
            <Card.Body>
            <h5>{content.name}</h5>
            <p><i>{content.username}</i></p>
            <p>{content.email}</p>
            <p>{content.website}</p>
            </Card.Body>
        </Card>
        </Link>
        </Col>)}
        </Row>
        </Container> 
        </div>
    )
}

export default NewsCards
