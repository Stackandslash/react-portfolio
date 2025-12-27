import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import "./style.css";

function navigation(props) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand>Logan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="navbar-dark navbar-nav nav-link" to="/">About</NavLink>
          <NavLink className="navbar-dark navbar-nav nav-link" to="/portfolio">Portfolio</NavLink>
          <NavLink className="navbar-dark navbar-nav nav-link" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navigation;
