import React, { Component } from 'react';
import logo from 'icons/question.svg';
import CTGame from 'containers/CTGame/CTGame.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Guess The Number!</h2>
        </div>
        <CTGame upper={10} lower={1} />
      </div>
    );
  }
}

export default App;
