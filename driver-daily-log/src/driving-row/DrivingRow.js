import React, { Component } from 'react';
import HourCell from '../hour-cell/HourCell';
import hours from '../hour-cell/colLabel';



class DrivingRow extends Component {



    render() {
        const positionLineBottom = true;
        return ( 
            <div>
                {
                    hours.map((hour, index)=> {
                        return (
                            <HourCell row="driving" positionLineBottom={positionLineBottom} clickedOn={ this.props.clickedOn } time={hour} hour={index} key={index}/>  
                        );
                    })
                }
                
        
            </div>
        );
    }
}

export default DrivingRow;