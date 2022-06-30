import "./Aboutpage.css"
import Footer from "../../Components/Footers/Footer";
import AboutPara from "../../Components/AboutPara/AboutPara.jsx"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Image1 from "../../Assets/Images/stap.jpg";
import Image2 from "../../Assets/Images/stap1.jpg";
import Image3 from "../../Assets/Images/stap3.jpg";
const About = () => {
    return (
        <div>
        <div className="container my-3">
        <div className="text-center">
            <h5 className="">Our Professional Team</h5>
        </div>
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

export default About
