import React, { Component } from 'react';
import './App.css';
import Ability from './Ability.js';

class Abilities extends Component {
    render() {
        let abilities = this.props.abilityData;
        let elements = [];
        for (let i = 0; i < abilities.length; i++) {
           elements.push(<div><Ability value={abilities[i]} /></div>);
        }
        return (
            <div className="newSection">
                 - Abilities - 
                {elements}
            </div>
        );
    }
}

export default Abilities;