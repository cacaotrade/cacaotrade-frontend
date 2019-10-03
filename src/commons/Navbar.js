import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import "./Nav.css";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Cacaotrade</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Publications</Nav.Link>
        <Nav.Link href="#link">Offers</Nav.Link>
      </Nav>
      <Form inline>
        <Button id="b-signup" variant="outline-success">
          Signup
        </Button>
        <Button variant="outline-success">Login</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export { Header };
