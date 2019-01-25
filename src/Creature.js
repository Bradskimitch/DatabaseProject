import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Characteristics from './Characteristics.js'
import Damage from './Damage.js';
import Abilities from './Abilities.js'
import Actions from './Actions.js';
import Reactions from './Reactions.js';
import LegendaryActions from './LegendaryActions.js';
import Equipment from './Equipment.js';


let data;
let userInput;

class DatabaseDisplay extends Component {
    constructor() {
        super();
        this.state = {
            creatures: "Example",
            str: 12,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10,
            /*
            damageRes = [
                    damageResistances: "",
                    damageImmunities: "" ,
                    damageVulnerabilities: "" ,
                    conditionImmunities: ""
            ],
                */
            abilitiesData: [
                "Cunning Action - May do......",
                "Small Target - All ......",
                "Other Ability - So ....."
            ],
            actionsData: [
                "Multiattack:   The knight makes two Melee Attacks."
            ],
            reactionsData: [
                "Parry"
            ],
            legendaryActionsData: [
                "Move"
            ],
            equipmentData: [
                "Excalibur?"
            ]

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
                            creatures: response.data,
                            str: this.creatures[0].creatureStr,
                            dex: this.creatures[0].creatureDex,
                            con: this.creatures[0].creatureCon,
                            int: this.creatures[0].creatureInt,
                            wis: this.creatures[0].creatureWis,
                            cha: this.creatures[0].creatureCha,
                            /*
                            damageRes = [
                                    damageResistances: "",
                                    damageImmunities: "" ,
                                    damageVulnerabilities: "" ,
                                    conditionImmunities: ""
                            ],
                                */
                            abilitiesData: this.creatures[0].creatureAbilities,
                            actionsData: this.creatures[0].creatureActions,
                            reactionsData: this.creatures[0].creatureReactions,
                            legendaryActionsData: this.creatures[0].creatureLegendary,
                            equipmentData: this.creatures[0].creatureEquipment
                        });
                    }
                    else {
                        alert("No Such Creature Found")
                    }
                });
        }
    }
    render() {
        return (
            <p>
                NAME <br />
                Armour Class"Text here" <br />
                Hit Points"Text here" <br />
                Speed"Text Here"  <br />
                <Characteristics
                    str={this.state.str}
                    dex={this.state.dex}
                    con={this.state.con}
                    int={this.state.int}
                    wis={this.state.wis}
                    cha={this.state.cha}
                />
                --------------------------------------------------------------------------
                    <div className="newSection">
                    Saving Throws"Text here"<br />
                    Skills"Text here"<br />
                    <Damage />
                    Senses"Text here"<br />
                    Languages"Text here"<br />
                </div>
                --------------------------------------------------------------------------
                <Abilities abilityData={this.state.abilitiesData} />
                <Actions actionData={this.state.actionsData} />
                <Reactions reactionData={this.state.reactionsData} />
                <LegendaryActions legendaryActionData={this.state.legendaryActionsData} />
                <Equipment equipData={this.state.equipmentData} />
            </p>
        );
    }
}

export default DatabaseDisplay;

