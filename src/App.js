import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Login from './Login.js'
import CreatureDatabaseDisplay from './CreatureDatabaseDisplay.js'
import DatabaseDisplay from './DatabaseDisplay.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      creatures: "Example",
      items: "asdfgsa"
    }
    this.update = () => {
      axios({
        method: 'get',
        url: `http://localhost:8080/SoloProject/rest/solo/item/json`,
        responseType: 'json'
      })
        .then(response => {
          if (response.data !== undefined) {
            this.setState({
              items: response.data
            });
            console.log(this.items);
          }
          else {
            alert("No Such Creature Found")
          }
        });
    }
  }

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
