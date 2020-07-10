import React from "react";
import "./App.css";
import Navigation from "./components/navBar/navBar";
import About from "./components/about/about";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
        <Navigation />
      <Container className="p-3">
        <About />
      </Container>
    </div>
  );
}

export default App;
