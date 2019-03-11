import React, { Component } from 'react';
import HourCell from '../hour-cell/HourCell';
import hours from '../hour-cell/colLabel';

class RemarksRow extends Component {

    render() {
        const positionLineBottom = false;
        const remarkStyle = {
            height: 25,
            overflow: 'hidden'
        }
        return ( 
            <div style={remarkStyle}>
               {
                    hours.map((hour, index)=> {
                        return (
                            <HourCell row="remarks" positionLineBottom={positionLineBottom} clickedOn={ this.props.clickedOn } time={hour} hour={index} key={index}/>  
                        );
                    })
                }      
        
            </div>
        );
    }
}

export default RemarksRow;