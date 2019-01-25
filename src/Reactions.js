import React, { Component } from 'react';
import './App.css';
import Reaction from './Reaction.js';

class Reactions extends Component {
    render() {
        let reactions = this.props.reactionData;
        let elements = [];
        for (let i = 0; i < reactions.length; i++) {
           elements.push(<div><Reaction value={reactions[i]} /></div>);
        }
        return (
            <div className="newSection">
                 - Reactions - 
                {elements}
            </div>
        );
    }
}

export default Reactions;