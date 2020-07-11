import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

function projectcard(props) {
  return (
    <div className = "cardDiv">
      <Card bg="secondary" text="light" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`/${props.image}`} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="dark">See it in Action</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default projectcard;
