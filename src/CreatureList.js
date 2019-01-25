import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


let data;
let userInput;

class CreatureList extends Component {
    constructor() {
        super();
        this.state = {
            creatures: "Example",
        }
        this.update = () => {
            userInput = document.getElementById("userInput").value
            //  console.log(userInput);
            axios({
                method: 'get',
                url: `localhost:8080/SoloProject/rest/solo/creature/json`,
                responseType: 'json'
            })
                .then(response => {
                    if (response.data !== undefined) {
                        this.setState({
                        });
                    }
                    else {
                        alert("No Such Creature Found")
                    }
                });
        }

}  
    render() {
        let elements = [];
        for (let i = 0; i < 10; i++) {
            elements.push(<li>{this.creatures[0].creatureName}</li>);
        }
        return (
            <table>
                {elements}
            </table>
        );
    }
}

export default CreatureList;

