import React, { Component } from 'react';
import logo from './test.png';
import './App.scss';

import About from './components/about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <About />
      </div>
    );
  }
}

export default App;
