import React, { Component } from "react";

import "./App.scss";

import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

class App extends Component {
  state = {
    fixed: false,
    width: window.screen.width
  };
  componentDidMount() {
    console.log("Here");
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
  render() {
    return (
      <div className="App">
        <Header fixed={this.state.fixed} width={this.state.width} />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
