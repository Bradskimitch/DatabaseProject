import React, { Component } from 'react';
import './App.css';
import Login from './Login.js'
import DatabaseDisplay from './DatabaseDisplay.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <Login />
          <div className="menu">
            <p>
              <button id="menuButton" type="button"> button 1</button> <br />
              <button id="menuButton">button 2</button> <br />
            </p>
          </div>
        </div>

        <div className="App-body">
          <DatabaseDisplay />
        </div>
      </div>
    );
  }
}

export default App;
