import React, { Component } from "react";
import logo from "./logotest.svg";
import "./App.scss";
import $ from "jquery";

import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

class App extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      var yPos = $(window).scrollTop() / 10;
      var newPos = 35 + yPos;
      $(".App-logo").css({
        top: newPos + "%"
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>{" "}
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
