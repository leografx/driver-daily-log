import React, { Component } from 'react';
import HourCell from '../hour-cell/HourCell';
import hours from '../hour-cell/colLabel';

class OffDutyRow extends Component {

    render() {
        const positionLineBottom = false;
        return ( 
            <div>
                {
                    hours.map((hour, index)=> {
                        return (
                            <HourCell row="offDuty" positionLineBottom={positionLineBottom} clickedOn={ this.props.clickedOn } time={hour} hour={index} key={index}/>  
                        );
                    })
                }      
        
            </div>
        );
    }
}

export default OffDutyRow;