import React, { Component } from 'react';

class ListButton extends Component {
    render() {
        return (
            <button id='tableButton'>
                    <div className='column' id='dataEntry'>{this.props.Name}</div>
                    <div className='column' id='dataEntry'>{this.props.Type}</div>
                    <div className='column' id='dataEntry'>{this.props.Rarity}</div>                
            </button>
        );
    }
}
export default ListButton;