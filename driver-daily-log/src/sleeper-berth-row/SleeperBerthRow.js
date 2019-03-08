import React, { Component } from 'react';
import HourCell from '../hour-cell/HourCell';


class SleeperBerthRow extends Component {

    render() {

        return ( 
            <div>
                <HourCell clickedOn={ this.props.clickedOn } hour="12:00 AM"/>
                
                <HourCell clickedOn={ this.props.clickedOn } hour="1:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="2:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="3:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="4:00 AM"/>
      
                <HourCell clickedOn={ this.props.clickedOn } hour="5:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="6:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="7:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="8:00 AM"/>
      
                <HourCell clickedOn={ this.props.clickedOn } hour="9:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="10:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="11:00 AM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="12:00 PM"/>
               
                <HourCell clickedOn={ this.props.clickedOn } hour="1:00 PM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="2:00 PM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="3:00 PM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="4:00 PM"/>
      
                <HourCell clickedOn={ this.props.clickedOn } hour="5:00 PM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="6:00 PM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="7:00 PM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="8:00 PM"/>
      
                <HourCell clickedOn={ this.props.clickedOn } hour="9:00 PM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="10:00 PM"/>

                <HourCell clickedOn={ this.props.clickedOn } hour="11:00 PM"/>
            </div>
        );
    }
}

export default SleeperBerthRow;