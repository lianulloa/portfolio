import React, { Component } from "react";
import {
  Container
} from "@material-ui/core"
import "./About.scss"
import PersonalProject from "../work/Personal";
import WorkTimeline from "../work/Timeline/Timeline"
import JOBS from "./jobs.json"

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
            <div className="col-md-12">
              <WorkTimeline jobs={JOBS}/>
            </div>
          </div>
          <h1 style={{ textTransform: "uppercase"}}>
            Personal Projects
          </h1>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <PersonalProject
                title="VuexModuleMaker"
                description="A helper to reduce repetition inside Vuex modules"
                link="https://www.npmjs.com/package/@lianulloa/vuex-module-maker"
              />
            </div>
            <div className="col-sm-6 col-xs-12">
              <PersonalProject
                title="Silic"
                description="Gesture-based mobile music player. Integrates with cloud services like Google Drive and Dropbox"
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
