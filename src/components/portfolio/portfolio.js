import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import ProjectCard from "../projectcard/projectcard.js";
import projects from "../../assets/projects.json";
import employeecards from "../../images/employeecards.png";
import proj1shot from "../../images/proj1shot.png";
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
            name="Employee Cards"
            image={employeecards}
            link="https://github.com/Stackandslash/employee-summary/blob/master/README.md"
            description="This command-line application creates a page of employee cards for your site, based on your specifications."
          />
          <ProjectCard
            name="Weather Dashboard"
            image={weatherdashboard}
            link="https://stackandslash.github.io/weather-dash/"
            description="This application is a simple way to find weather conditions around the country."
          />
          <ProjectCard
            name="Scheduler"
            image={scheduler}
            link="https://stackandslash.github.io/day-planner-w3d4/"
            description="This application is a quick option to make and save notes by the hour."
          />
          </CardDeck>
        </Jumbotron>
    </div>
  );
}

export default portfolio;