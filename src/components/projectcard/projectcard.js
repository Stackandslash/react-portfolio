import React from "react";
import {Card, Button, ListGroup} from "react-bootstrap";
import "./style.css";

function projectcard(props) {
  return (
    <div className="cardDiv">
      <Card bg="secondary" text="light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={window.location.origin + "/" + props.image}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <ListGroup horizontal>
          <ListGroup.Item variant="dark" action href={props.link}>
            See it in Action
          </ListGroup.Item>
          <ListGroup.Item variant="dark" action href={props.gitlink}>
            See it on Github
          </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default projectcard;
