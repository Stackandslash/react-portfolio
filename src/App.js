import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";
import Navigation from "./components/navBar/navBar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";


import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
    <div className="App">
        <Navigation />
      <Container className="p-3">
        <Switch>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/portfolio">
          <Portfolio />
          </Route>
          <Route path="/">
          <About />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Container>
    </div>
    </Router>
  );
}

export default App;
