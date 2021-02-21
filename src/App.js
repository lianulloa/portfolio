import React, { Component } from "react";

import "./App.scss";

import About from "./components/about/About";
import Services from "./components/services/Services";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navBar/NavBar";
class App extends Component {
  state = {
    fixed: false,
    width: window.screen.width
  };
  componentDidMount() {
    window.onresize = () => {
      this.setState({
        width: window.screen.width
      });
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner width={this.state.width} /> 
        <Services />
        <About />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
