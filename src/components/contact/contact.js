import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
//import "./style.css";

function contact(props) {
  return (
    <div className="About">
        <Jumbotron>
          <h1 className="header">Contact Me</h1>
          <hr class="my-4" />
          <p>I can be contacted through <a href = "https://www.linkedin.com/in/logan-lake-8b012198/" class = "font-weight-bold">LinkedIn</a> and <a href = "https://github.com/Stackandslash" class = "font-weight-bold">GitHub</a>.</p>
          <p>My current <a class = "font-weight-bold" href = "./assets/LLResume2020.pdf">Resume</a> is also available directly.</p>
        </Jumbotron>
    </div>
  );
}

export default contact;