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

class CreatureDatabaseDisplay extends Component {
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
                "Multiattack:   The knight makes two Melee Attacks.",

                "Greatsword:    Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",

                "Heavy Crossbow:    Ranged Weapon Attack: +2 to hit, range 100/ 400 ft., one target.Hit: 5(1d10) piercing damage.",

                "Leadership (Recharges after a Short or Long Rest):  For 1 minute, the knight can utter a Special Command or warning whenever a nonhostile creature that it can see within 30 ft.of it makes an Attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight.A creature can benefit from only one Leadership die at a time. This effect ends if the knight is Incapacitated."
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
            <div className="databaseSection">
                <header>
                    <input id="userInput" type="text" placeholder="Enter Movie Name" />
                    <button onClick={this.update}>Search</button>
                </header>
            </div>
        );
    }
}

export default CreatureDatabaseDisplay;