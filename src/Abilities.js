import React, { Component } from 'react';
import './App.css';

class Abilities extends Component {
    getAbility = () => {
        console.log()
    }
    render() {
        let abilities=[];
        if(this.state.abilitiesData){
            for(let ability of this.state.abilitiesData){
                abilities.push(<Abilities abilityName={abilityName} abilityText={abilityText}/>)
            }
        }
        return (
            <div>
                {this.props.abilityName}
                {this.props.abilityText}
            </div>
        );
    }
}

export default Abilities;