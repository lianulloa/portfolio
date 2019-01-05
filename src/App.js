import React, { Component } from "react";
import logo from "./logotest.svg";
import menu from "./static/images/toggle_menu.svg";
import "./App.scss";
import $ from "jquery";

import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

class App extends Component {
  state = {
    scrollValues: [25],
    fixed: false
  };
  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
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
              <button className="menu-trigger" onClick={this.handleMenuClick}>
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
