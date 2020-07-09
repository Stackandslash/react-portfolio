import React from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
