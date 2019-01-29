import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListButton from './ListButton.js'


let data;
var userInput;

class ItemList extends Component {

    constructor() {
        super();
        this.handler = this.handler.bind(this);
        this.state = {
            items: "Example",
        }

        this.update = () => {
            axios.get('http://localhost:8080/SoloProject/rest/solo/item/json')
                .then(res => {
                    const items = res.data;
                    this.setState({ items });
                })
        }
    }

    handler() {
        this.update();
    }

    componentDidMount() {
        axios.get('http://localhost:8080/SoloProject/rest/solo/item/json')
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    /*
        @action add(data){
            const existing = this.all;
            this.all = existing.concat(data);
        }
    */
    addItem = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/SoloProject/rest/solo/item/json`, {
            equipmentName: this.refs.itemName.value,
            equipmentType: this.refs.itemType.value,
            equipmentRarity: this.refs.itemRarity.value,
            equipmentAttunement: this.refs.itemAttunement.value,
            equipmentDescription: this.refs.itemDescription.value
        }).then(response => {
            this.update();
        });
        this.refs.itemName.value = null;
        this.refs.itemType.value = null;
        this.refs.itemRarity.value = null;
        this.refs.itemAttunement.value = null;
        this.refs.itemDescription.value = null;
    }
    render() {
        let elements = [];
        let objects = this.state.items;
        for (let i = 0; i < this.state.items.length; i++) {
            //   for (let key in this.state.items[i].equipmentName) {
            //     if (this.state.items[i].equipmentName[key].indexOf(userInput) != -1) {
            elements.push(
                <ListButton
                    action={this.handler}
                    Id={this.state.items[i].equipmentId}
                    Name={this.state.items[i].equipmentName}
                    Type={this.state.items[i].equipmentType}
                    Rarity={this.state.items[i].equipmentRarity}
                    Attunement={this.state.items[i].equipmentAttunement}
                    Description={this.state.items[i].equipmentDescription}
                />
            );
            //   }
            // }
        }
        return (
            <div>
                <header>
                    <input ref="userInput" type="text" placeholder="Enter Movie Name" onChange={this.update} />
                </header>
                <div>
                    <form className='itemForm' onSubmit={this.addItem}>
                        <fieldset>
                            <legend>New Item</legend>
                            <input ref="itemName" type="text" placeholder="Enter Item Name" />
                            <input ref="itemType" type="text" placeholder="Enter Item Type" />
                            <input ref="itemRarity" type="text" placeholder="Enter Item Rarity" />
                            <input ref="itemAttunement" type="text" placeholder="Enter Item Attunement Needs" />
                            <button type='submit'>Submit</button>
                            <br />
                            <input ref="itemDescription" type="text" placeholder="Enter Item Description" />

                        </fieldset>
                    </form>
                    {elements}
                </div>
            </div>
        );
    }
}

export default ItemList;