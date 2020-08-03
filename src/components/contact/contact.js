import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import LLResume from "../../assets/LLResume.pdf";
//import "./style.css";

function contact(props) {
  return (
    <div className="About">
        <Jumbotron>
          <h1 className="header">Contact Me</h1>
          <hr class="my-4" />
          <p>I can be contacted through <a href = "https://www.linkedin.com/in/logan-lake-8b012198/" class = "font-weight-bold">LinkedIn</a> and <a href = "https://github.com/Stackandslash" class = "font-weight-bold">GitHub</a>.</p>
          <p>My current <a class = "font-weight-bold" href = {LLResume}>Resume</a> is available for viewing.</p>
          <p>I can also be reached by email at Stackandslash@gmail.com</p>
        </Jumbotron>
    </div>
  );
}

export default contact;