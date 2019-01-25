import React, { Component } from 'react';
import './App.css';
import LegendaryAction from './LegendaryAction.js';

class LegendaryActions extends Component {
    render() {
        let legendaryActions = this.props.legendaryActionData;
        let elements = [];
        for (let i = 0; i < legendaryActions.length; i++) {
           elements.push(<div><LegendaryAction value={legendaryActions[i]} /></div>);
        }
        return (
            <div className="newSection">
                 - Legendary Actions - 
                {elements}
            </div>
        );
    }
}

export default LegendaryActions;