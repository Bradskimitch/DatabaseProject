import React, { Component } from 'react';
import axios from 'axios';
import ItemList from './ItemList.js'
class ListButton extends Component {
    deleteEntry = () => {
        axios.delete('http://localhost:8080/SoloProject/rest/solo/item/json/' + this.props.Id)
            .then(res => {
                console.log(res);
                this.props.action();
            });
    }
    render() {

        return (
            <div id='listButton'>
                <button id='tableButton'>
                    <div className='column' id='dataEntry'>{this.props.Name}</div>
                    <div className='column' id='dataEntry'>{this.props.Type}</div>
                    <div className='column' id='dataEntry'>{this.props.Rarity}</div>
                    <div className='column' id='dataEntry'>{this.props.Description}</div>
                </button>
                <button id='deleteButton' onClick={this.deleteEntry}>Delete</button>
            </div>
        );
    }
}
export default ListButton;