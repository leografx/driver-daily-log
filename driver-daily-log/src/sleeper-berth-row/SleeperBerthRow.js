import React, { Component } from 'react';
import HourCell from '../hour-cell/HourCell';
import hours from '../hour-cell/colLabel';

class SleeperBerthRow extends Component {

    render() {
        const positionLineBottom = false;
        return ( 
            <div>
                {
                    hours.map((hour, index)=> {
                        return (
                            <HourCell row="sleeperBerth" positionLineBottom={positionLineBottom} clickedOn={ this.props.clickedOn } time={hour} hour={index} key={index} />  
                        );
                    })
                }      
        
            </div>
        );
    }
}

export default SleeperBerthRow;