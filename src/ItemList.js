import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListButton from './ListButton.js'


let data;
var userInput;

class ItemList extends Component {

    constructor() {
        super();
        this.state = {
            items: "Example",
        }

        this.update = () => {
            userInput = document.getElementById("userInput").value;

        }

    }

    componentDidMount() {
        axios.get(`http://localhost:8080/SoloProject/rest/solo/item/json`)
            .then(res => {
                const items = res.data;
                console.log(items);
                this.setState({ items });
            })
    }

    render() {
        let elements = [];
        let objects = this.state.items;
        for (let i = 0; i < this.state.items.length; i++) {
            //   for (let key in this.state.items[i].equipmentName) {
            //     if (this.state.items[i].equipmentName[key].indexOf(userInput) != -1) {
            elements.push(
                <ListButton
                    Name={this.state.items[i].equipmentName}
                    Type={this.state.items[i].equipmentType}
                    Rarity={this.state.items[i].equipmentRarity + this.state.items[i].equipmentAttunement}
                    Description={this.state.items[i].equipmentDescription}
                />
            );
            //   }
            // }
        }
        return (
            <div>
                <header>
                    <input id="userInput" type="text" placeholder="Enter Movie Name" onChange={this.update} />
                </header>
                {elements}
                <table>
                    <tr>
                        <td><input id="itemName" type="text" placeholder="Enter Item Name"/></td>
                        <td><input id="itemType" type="text" placeholder="Enter Item Type"/></td>
                        <td><input id="itemRarity" type="text" placeholder="Enter Item Rarity"/></td>
                        <td><input id="itemAttunement" type="text" placeholder="Enter Item Attunement Needs"/></td>
                    </tr>
                    <tr>
                        <td colSpan='4'><input id="itemDescription" type="text" placeholder="Enter Item Description"/></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ItemList;