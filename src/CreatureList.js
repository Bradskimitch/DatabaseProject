/*
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


let data;
let userInput;

class CreatureList extends Component {
constructor() {
        super();
        this.handler = this.handler.bind(this);
        this.state = {
            creatures: "Example"
        }

        this.update = () => {
            axios.get(`http://localhost:8080/SoloProject/rest/solo/creature/json`)
                .then(res => {
                    const creatures = res.data;
                    console.log(creatures);
                    this.setState({ creatures });
                })
        }
    }
    render() {
        let elements = [];
        let objects = this.state.creatures;
        for (let i = 0; i < this.state.creatures.length; i++) {
            //   for (let key in this.state.items[i].equipmentName) {
            //     if (this.state.items[i].equipmentName[key].indexOf(userInput) != -1) {
            elements.push(
               // <ListButton
                 //   action={this.handler}
                   // Id={this.state.creatures[i].equipmentId}
                    //Name={this.state.items[i].equipmentName}
             //       Type={this.state.items[i].equipmentType}
            //        Rarity={this.state.items[i].equipmentRarity + this.state.items[i].equipmentAttunement}
            ////        Description={this.state.items[i].equipmentDescription}
           //     />
           // );
            //   }
            // }
        }
            
}

export default CreatureList;
*/
