import Footer from "../../Components/Footers/Footer.jsx"
import AboutPara from "../../Components/AboutPara/AboutPara.jsx"
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Image1 from "../../Assets/Images/stap.jpg";
import Image2 from "../../Assets/Images/stap1.jpg";
import Image3 from "../../Assets/Images/stap3.jpg";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div>
        <div className="container-fluid my-2">
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image1}
            alt="First slide"
            width="200px"
            height="500px"
            />
            <Carousel.Caption>
            <h3>New Offer</h3>
            <Button variant="primary">Avail Now</Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image2}
            alt="Second slide"
            width="200px"
            height="500px"
            />

            <Carousel.Caption>
            <h3>New Offer</h3>
            <Button variant="primary">Avail Now</Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image3}
            width="200px"
            height="500px"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>New Offer</h3>
            <Button variant="primary">Avail Now</Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
        <div className="container my-3">
        <CardGroup>
        <Card>
            <Card.Img variant="top" src={Image1} width="200px" height="200px" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={Image2} width="200px" height="200px" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={Image3} width="200px" height="200px" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardGroup>
        </div>
        <AboutPara />
        <Footer />
        </div>
    )
}

export default Homepage
