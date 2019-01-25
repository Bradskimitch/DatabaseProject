import React, { Component } from 'react';
import './App.css';

class LegendaryAction extends Component {
    render() {
        return (
            <div>
               {this.props.value}
            </div>
        );
    }
}

export default LegendaryAction;