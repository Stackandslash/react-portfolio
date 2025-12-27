import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function navigation(props) {
  return (
    <Navbar variant="dark" bg="dark" fixed = "bottom" className="footer-centered">
      <Navbar.Text>Logan's Portfolio - Copyright information will go here, projects permitting.</Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navigation;