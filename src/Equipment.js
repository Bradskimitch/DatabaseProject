import React, { Component } from 'react';
import './App.css';
import Equip from './Equip.js';

class Equipment extends Component {
    render() {
        let Equipment = this.props.equipData;
        let elements = [];
        for (let i = 0; i < Equipment.length; i++) {
           elements.push(<div><Equip value={Equipment[i]} /></div>);
        }
        return (
            <div className="newSection">
                 - Equipment - 
                {elements}
            </div>
        );
    }
}

export default Equipment;