import React, { Component } from "react";
import logo from "./logotest.svg";
import menu from "./static/images/toggle_menu.svg";
import "./App.scss";

import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

class App extends Component {
  state = {
    scrollValues: [25],
    fixed: false,
    width: window.screen.width
  };
  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
    window.onresize = () => {
      this.setState({ width: window.screen.width });
    };
  }
  handleAnimation() {
    this.setState({});
    let navH = document.getElementsByClassName("App-navigation")[0]
      .offsetHeight;
    let headerH = document.getElementsByClassName("App-header")[0].offsetHeight;
    let navInit = headerH - navH;
    this.setState({ fixed: window.scrollY > navInit });
  }

  handleMenuClick() {}
  render() {
    let navclass = "App-navigation";
    navclass += this.state.fixed === true ? " fixed" : " no-fixed";

    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="Deal"
            style={{ top: 25 + window.scrollY / 10 + "%" }}
          />
          <div className={navclass}>
            <div className="App-navigation-container">
              <a href="#" className="App-link-logo">
                <img src={logo} className="App-menu-logo" alt="Deal" />
              </a>
              <ul
                style={{ display: this.state.width <= 764 ? "none" : "flex" }}
              >
                <li>
                  <a href="#"> About Us </a>
                </li>
                <li>
                  <a href="#"> Services </a>
                </li>
                <li>
                  <a href="#"> Contact Us </a>
                </li>
                <li>
                  <a href="#"> How find us? </a>
                </li>
              </ul>
              <button
                className="menu-trigger"
                onClick={this.handleMenuClick}
                style={{ display: this.state.width > 764 ? "none" : "block" }}
              >
                <img src={menu} alt="menu" />
              </button>
            </div>
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
