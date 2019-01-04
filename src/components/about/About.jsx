import React, { Component } from "react";
import Description from "../description/Description";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="App-section">
        <div className="App-content">
          <Description />
        </div>
      </div>
    );
  }
}

export default About;
