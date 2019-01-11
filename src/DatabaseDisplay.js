import React, { Component } from 'react';
import './App.css';
import Characteristics from './Characteristics.js'
import Abilities from './Abilities.js'

class DatabaseDisplay extends Component {
    constructor() {
        super();
        this.state = {
            str: 12,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10,
            abilitiesData: "{}"
        }
    }
    getAbility = () => {
        console.log()
    }
    render() {
        /*
        let abilities=[];
        if(this.state.abilitiesData){
            for(let ability of this.state.abilitiesData){
                abilities.push(<Abilities abilityName={abilityName} abilityText={abilityText}/>)
            }
        }
        */
        return (
            <div className="databaseSection">
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
                    Saving Throws"Text here"<br />
                    Skills"Text here"<br />
                    Damage Resistances"Text here"<br />
                    Damage Immunitites"Text here"<br />
                    Damage Vulnerabilities"Text here"<br />
                    Condition Immunitites"Text here"<br />
                    Senses"Text here"<br />
                    Languages"Text here"<br />
                    <Abilities/>
                </p>
            </div>
        );
    }
}

export default DatabaseDisplay;