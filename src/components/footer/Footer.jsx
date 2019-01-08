import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    let top = 0;
    let height = 0;
    try {
      top = this.instance.getBoundingClientRect().top;
      height = this.instance.clientHeight;
    } catch (error) {
      top = 1000;
    }
    return (
      <footer className="App-footer" ref={el => (this.instance = el)}>
        <p
          style={{
            position: "absolute",
            top: (window.screen.availHeight - (top + height)) / 4 + "%"
          }}
        >
          Created by . 2019
        </p>
      </footer>
    );
  }
}

export default Footer;
