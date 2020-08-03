import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import ProjectCard from "../projectcard/projectcard.js";
import acecard from "../../images/acecard.png";
import scheduler from "../../images/scheduler.png";
import weatherdashboard from "../../images/weatherdashboard.png";
//import "./style.css";



function portfolio(props) {
  return (
    <div className="About">
        <Jumbotron>
          <h1 className="header">My Portfolio</h1>
          <hr className="my-4" />
          <CardDeck>
          <ProjectCard
            name="Weather Dashboard"
            image={weatherdashboard}
            link="https://stackandslash.github.io/weather-dash/"
            gitlink="https://github.com/Stackandslash/weather-dash"
            description="This application is a simple way to find weather conditions around the country."
          />
          <ProjectCard
            name="Scheduler"
            image={scheduler}
            link="https://stackandslash.github.io/day-planner-w3d4/"
            gitlink="https://github.com/Stackandslash/day-planner-w3d4"
            description="This application is a quick option to make and save notes by the hour."
          />
          <ProjectCard
            name="Ace Flashcards"
            image={acecard}
            link="https://arcane-beach-70075.herokuapp.com"
            gitlink="https://github.com/Vega2020/ace-flashcards"
            description="This team project offers a set of flashcards for use in learning more about coding, and the ability to add more as needed."
          />
          </CardDeck>
        </Jumbotron>
    </div>
  );
}

export default portfolio;