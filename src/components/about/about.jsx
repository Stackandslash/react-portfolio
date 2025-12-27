import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
//import "./style.css";

function about(props) {
  return (
    <div className="About">
        <Jumbotron>
          <h1 className="display-4">About Logan</h1>
          <hr className="my-4" />
          <div className="col-8 offset-2">
        <img className = "img-thumbnail mr-3 mb-1 img-fluid" src={require("../../assets/Pictorial.jpg")} alt = "This will be me, but right now it's cats."/>
      </div>
          <p>
          Logan is a recent graduate of the University of Arizona's Full Stack Coding Bootcamp. Since then, he's kept busy reading and learning about new technologies and concepts.
          </p>
          <p>
            He's proficient in HTML, CSS, SQL, React.js, and REST APIs. He's always looking to learn new concepts, and sharpen his skills with the ones he already knows. 
          </p>
        </Jumbotron>
    </div>
  );
}

export default about;