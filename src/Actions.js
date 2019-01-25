import React, { Component } from 'react';
import './App.css';
import Action from './Action.js';

class Actions extends Component {
    render() {
        let actions = this.props.actionData;
        let elements = [];
        for (let i = 0; i < actions.length; i++) {
           elements.push(<div><Action value={actions[i]} /></div>);
        }
        return (
            <div className="newSection">
                 - Actions - 
                {elements}
            </div>
        );
    }
}

export default Actions;