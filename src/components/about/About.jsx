import React, { Component } from "react";
import {
  Container
} from "@material-ui/core"

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
          <h1>
            About me
          </h1>
        </Container>
      </div>
    );
  }
}

export default About;
