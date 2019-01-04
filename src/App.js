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
      var navInit = $(".App-header")[0].offsetHeight;
      var navigation = $(".App-navigation");
      // var navTop = navigation[0].offsetTop;
      var scrollPos = $(window).scrollTop();
      var yPos = scrollPos / 8;
      var newPos = 25 + yPos;
      $(".App-logo").css({
        top: newPos + "%"
      });

      // if (scrollPos >= navTop && scrollPos < navInit) {
      //   navigation.css({
      //     bottom: -(scrollPos - navTop) + "px"
      //   });
      // } else {
      //   navigation.css({
      //     bottom: "0"
      //   });
      // }
      if (scrollPos > navInit) {
        if (!navigation.hasClass("fixed")) {
          navigation.removeClass("no-fixed");
          navigation.addClass("fixed");
        }
      } else {
        if (navigation.hasClass("fixed")) {
          navigation.removeClass("fixed");
          navigation.addClass("no-fixed");
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-navigation no-fixed">
            <ul>
              <li>
                <a href="#"> navigation1 </a>
              </li>
              <li>
                <a href="#"> navigation2 </a>
              </li>
              <li>
                <a href="#"> navigation3 </a>
              </li>
              <li>
                <a href="#"> navigation4 </a>
              </li>
              <li>
                <a href="#"> navigation5 </a>
              </li>
            </ul>
          </div>
        </header>
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
