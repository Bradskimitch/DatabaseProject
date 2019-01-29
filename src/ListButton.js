import React, { Component } from 'react';
import axios from 'axios';
import ItemList from './ItemList.js'
class ListButton extends Component {
    deleteEntry = () => {
        axios.delete('http://localhost:8080/SoloProject/rest/solo/item/json/' + this.props.Id)
            .then(res => {
                this.props.action();
            });

    }

    updateItem = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/SoloProject/rest/solo/item/json/' + this.props.Id, {
            equipmentName: this.refs.itemName.value,
            equipmentType: this.refs.itemType.value,
            equipmentRarity: this.refs.itemRarity.value,
            equipmentAttunement: this.refs.itemAttunement.value,
            equipmentDescription: this.refs.itemDescription.value
        }).then(response => {
            this.props.action();
        });
        this.refs.itemName.value = '';
        this.refs.itemType.value = '';
        this.refs.itemRarity.value = '';
        this.refs.itemAttunement.value = '';
        this.refs.itemDescription.value = '';
    }

    render() {
        return (
            <div id='listButton'>
                <button id='tableButton'>
                    <div className='column' id='dataEntry'>{this.props.Name}</div>
                    <div className='column' id='dataEntry'>{this.props.Type}</div>
                    <div className='column' id='dataEntry'>{this.props.Rarity + '(' + this.props.Attunement + ')'}</div>
                    <div id='dataEntry'>{this.props.Description}</div>
                    <br />
                    <form className='updateForm' onSubmit={this.addItem}>
                        <fieldset>
                            <legend>Update Item</legend>
                            <input ref="itemName" type="text" placeholder="Enter Item Name" />
                            <input ref="itemType" type="text" placeholder="Enter Item Type" />
                            <input ref="itemRarity" type="text" placeholder="Enter Item Rarity" />
                            <input ref="itemAttunement" type="text" placeholder="Enter Item Attunement Needs" />
                            <button id='updateButton' onClick={this.updateItem}>Update</button>
                            <br />
                            <input ref="itemDescription" type="text" placeholder="Enter Item Description" />
                        </fieldset>
                    </form>
                </button>
                <button id='deleteButton' onClick={this.deleteEntry}>Delete</button>

            </div>
        );
    }
}
export default ListButton;