import Footer from "../../Components/Footers/Footer";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
const Contactpage = () => {
    return (
        <div>
        <div className="container border p-3 my-5 w-50 bg-body rounded">
        <div className="text-center">
            <h2>Contact Us</h2>
            <p>It will be a pleasure for us to talk</p>
        </div>
        <hr />
        <Form autoComplete="off">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
            <Form.Control type="email" placeholder="Enter email" />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescriptio">
        <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
            as="textarea"
            placeholder="Leave Description here"
            style={{ height: '100px' }}
            />
        </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirm to submit" />
        </Form.Group>
        <Button className="w-100" variant="dark" type="submit">
            Submit
        </Button>
        </Form>
        </div>
        <Footer /> 
        </div>
    )
}

export default Contactpage
