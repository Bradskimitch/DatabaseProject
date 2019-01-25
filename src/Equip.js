import React, { Component } from 'react';
import './App.css';

class Equip extends Component {
    render() {
        return (
            <div>
               {this.props.value}
            </div>
        );
    }
}

export default Equip;