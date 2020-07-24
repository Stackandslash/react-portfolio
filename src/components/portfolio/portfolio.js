import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import ProjectCard from "../projectcard/projectcard.js";
import projects from "../../assets/projects.json";
import employeecards from "./employeecards.png";
import proj1shot from "./proj1shot.png";
import scheduler from "./scheduler.png";
import weatherdashboard from "./weatherdashboard.png";
//import "./style.css";



function portfolio(props) {
  return (
    <div className="About">
        <Jumbotron>
          <h1 className="header">My Portfolio</h1>
          <hr className="my-4" />
          <CardDeck>
          {projects.map(project => (
          <ProjectCard
            name={project.name}
            image={project.image}
            link={project.link}
            description={project.description}
          />
          ))}
          </CardDeck>
        </Jumbotron>
    </div>
  );
}

export default portfolio;