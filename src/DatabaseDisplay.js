import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Creature from './Creature.js';
import CreatureList from './CreatureList.js';
import ItemList from './ItemList.js';

let data;
let userInput;

class DatabaseDisplay extends Component {

    // List of each item/creature name and type that shortens with searching
    render() {
        
        return (
            <div className="databaseSection">
                <ItemList />
            </div>
        );
    }
}

export default DatabaseDisplay;