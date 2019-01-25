import React, { Component } from 'react';
import './App.css';

class Ability extends Component {
    render() {
        return (
            <div>
               {this.props.value}
            </div>
        );
    }
}

export default Ability;