import React, { Component } from "react";
import Description from "../description/Description";

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
        <div className="App-content">
          <Description />
        </div>
      </div>
    );
  }
}

export default About;
