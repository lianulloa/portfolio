import React, { Component } from 'react';
import logo from './test.png';
import './App.scss';

import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
