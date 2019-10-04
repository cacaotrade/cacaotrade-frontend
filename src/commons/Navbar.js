import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { ModalButton } from "./Form";
import "./Nav.css";

const Header = props => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Cacaotrade</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link onClick={() => props.changePage("Publications")}>
          Publications
        </Nav.Link>
        <Nav.Link onClick={() => props.changePage("Offers")}>Offers</Nav.Link>
      </Nav>
      <Form inline>
        <ModalButton title={"Signup"} />
        <ModalButton title={"Login"} />
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export { Header };
