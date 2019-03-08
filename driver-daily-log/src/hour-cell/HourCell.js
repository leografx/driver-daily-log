import React, { Component } from 'react'
import './HourCell.css';
class HourCell extends Component {
    constructor (props) {
        super(props);
        this.hourZone = this.hourZone.bind(this);
        this.quarterZone = this.quarterZone.bind(this);
        this.thirdZone = this.thirdZone.bind(this);
        this.halfZone = this.halfZone.bind(this);
    }

    render() {
        return (
            <div className="box"> 
                <div className="hour-cell">
                    <div onClick={ this.hourZone } className="zone-hour"></div>
                    <div onClick={ this.quarterZone } className="zone-quarter"></div>
                    <div onClick={ this.halfZone } className="zone-half"></div>
                    <div onClick={ this.thirdZone } className="zone-third"></div>
                    <div  className="line quarter-line"></div>
                    <div  className="line half-line"></div>
                    <div  className="line third-quarter-line"></div>
                </div>
            </div> 
        )
    }

    hourZone() {
        console.log(this.props);
    }

    quarterZone() {
        console.log(this.props, '15');
    }

    halfZone () {
        console.log(this.props, '30');
    }

    thirdZone() {
        console.log(this.props, '45');
    }
}

export default HourCell;