import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
//import "./style.css";

function about(props) {
  return (
    <div className="About">
        <Jumbotron>
          <h1 className="header">About Logan</h1>
          <hr class="my-4" />
          <div class="col-8 offset-2">
        <img class = "img-thumbnail mr-3 mb-1 img-fluid" src={require("../../assets/Pictorial.jpg")} alt = "This will be me, but right now it's cats."/>
      </div>
          <p>
          Logan is a guy who has continued to code at least 5 days a week, and has been doing so for some time now. He enjoys doing so, as well as video games, writing, and writing video games. His interest in video games about writing is yet to be established. He is shown here with his wife, with whom he frequently writes.
          </p>
        </Jumbotron>
    </div>
  );
}

export default about;