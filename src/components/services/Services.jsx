import React from "react";
import {
  Chip,
  Container,
} from '@material-ui/core';
import Service from "../Service/Service";
import "./Services.scss"

function Services() {
  return <div className="App-section" id="App-services">
    <Container maxWidth="md">
      <h1>
        Skills
      </h1>
      <div className="row" style={{ paddingBottom: 40 }}>
        <Service 
          serviceTitle="Frontend Development on Vue"
          description="The Progressive JavaScript Framework. An incrementally adoptable ecosystem that scales between a library and a full-featured framework."
          logo={require("../../assets/logo.png")}
          frameworkTitle="VueJs" 
          frameworkHomePage="https://vuejs.org/"/>
        <Service 
          serviceTitle="Backend Development on Django"
          description="Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design"
          logo={require("../../assets/django.png")}
          frameworkTitle="Django" 
          frameworkHomePage="https://docs.djangoproject.com/en/3.1/"
          middle
        />
        <Service 
          serviceTitle="Mobile Development on Flutter"
          description="Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."
          logo={require("../../assets/flutter.png")}
          frameworkTitle="Flutter" 
          frameworkHomePage="https://flutter.dev/"
          right
        />
      </div>
      <div className="row" style={{ paddingBottom: 40, justifyContent: "center" }}>
        <Chip label="Jest" />
        <Chip label="Vue-Test-Utils" />
        <Chip label="TDD" />
        <Chip label="Scrum" />
        <Chip label="Vuepress" />
        <Chip label="Git" />
        <Chip label="Python" />
        <Chip label="Javascript" />
        <Chip label="Cypress" />
        <Chip label="Clean Code" />
      </div>
    </Container>
  </div>;
}

export default Services;
