import React, { Component } from 'react';
import './App.css';

class Action extends Component {
    render() {
        return (
            <div>
               {this.props.value}
            </div>
        );
    }
}

export default Action;