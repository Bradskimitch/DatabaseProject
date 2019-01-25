import React, { Component } from 'react';
import './App.css';

class Reaction extends Component {
    render() {
        return (
            <div>
               {this.props.value}
            </div>
        );
    }
}

export default Reaction;