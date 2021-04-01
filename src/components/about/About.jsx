import React, { Component } from "react";
import {
  Container
} from "@material-ui/core"
import "./About.scss"
import WorkExperience from "../work/Work";

class About extends Component {
  state = {};

  componentDidMount() {
    window.onscroll = () => {
      this.setState();
    };
  }

  render() {
    return (
      <div className="App-section" id="App-about">
        <Container maxWidth="md">
          <h1 style={{ textTransform: "uppercase"}}>
            Work Experience
          </h1>
          <div className="row">
            <WorkExperience
              title="Frontend Developer"
              company="Soluciones Alegra S.A.S."
              period="11/2019 - Present"
              achievements={[
                "Collaborated in the creation and maintenance of the company's Design System.",
                "Improved Design System documentation site by introducing a component which allowed to replace Codepen links and save money to the company by prescinding from that subscription.",
                "Designed and implemented a webpack loader in order to make translation reactive so different micro front could be integrated together dynamically.",
                "Aided to define guide lines for the tests suits with these new technologies."
              ]}
            />
            <WorkExperience
              title="Full Stack Developer"
              company="Freelancer"
              period="10/2018 - 11/2019"
              achievements={[
                "Developed a health-related QA website (React-Django)",
                "Launched a web-based application to keep the records of environmental actions taken by universities.",
                "Aided in the conceptualization of a self-managed publicity system for artist."
              ]}
            />
            <WorkExperience
              title="Full Stack Developer"
              company="Ampersand Cuba"
              period="03/2016 - 08/2018,"
              achievements={[
                "Launched a social platform for entrepreneurs. It gathered e-commerce and social media features",
                "Developed a TV app with Metrological Application Framework",
                "Deployed a landing page for a rental house",
              ]}
            />
          </div>
          <div style={{ width: "50%"}}></div>
        </Container>
      </div>
    );
  }
}

export default About;
