import React, { Component } from 'react';
import logo from './test.png';
import './App.scss';

import About from './components/about/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
