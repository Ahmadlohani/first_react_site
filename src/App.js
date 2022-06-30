import './App.css';
import Homepage from './Views/Homepage/Homepage';
import Aboutpage from './Views/Aboutpage/Aboutpage';
import Contactpage from './Views/Contactpage/Contactpage';
import Productpage from './Views/Productpage/Productpage';
import Newspage from './Views/Newspage/Newspage';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import * as Icon from 'react-bootstrap-icons'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <Navbar className="top-nav" collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-start" id="responsive-navbar-nav">
      <Nav>
      <Nav.Link href="#"><Icon.EnvelopeOpen size={15} /> example@gmail.com</Nav.Link>
      <Nav.Link href="#"><Icon.Phone size={15} /> 03121564268</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
              <Nav.Link href="#"><Icon.Facebook size={15} /> </Nav.Link>
              <Nav.Link href="#"><Icon.Whatsapp size={15} /> </Nav.Link>
              <Nav.Link href="#"><Icon.Twitter size={15} /> </Nav.Link>
              <Nav.Link href="#"><Icon.Linkedin size={15} /> </Nav.Link>
              <Nav.Link href="#"><Icon.Instagram size={15} /> </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#"><i>MyFirstReactSite</i></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
              <Nav.Link><Link className="text-decoration-none text-white" to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className="text-decoration-none text-white" to="/about">About</Link></Nav.Link>
              <Nav.Link><Link className="text-decoration-none text-white" to="/news">News</Link></Nav.Link>
              <Nav.Link><Link className="text-decoration-none text-white" to="/contact">Contact</Link></Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Homepage />;
}

function Product() {
  return <Productpage />;
}

function About() {
  return <Aboutpage />;
}

function News() {
  return <Newspage />;
}

function Contact() {
  return <Contactpage />;
}