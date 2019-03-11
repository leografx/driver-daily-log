import React, { Component } from 'react'
import './HourCell.css';


let timeLog = [];

class HourCell extends Component {

    constructor (props) {
        super(props);
        this.state  = {
            log:timeLog
        }
        this.hourZone = this.hourZone.bind(this);
        this.quarterZone = this.quarterZone.bind(this);
        this.thirdZone = this.thirdZone.bind(this);
        this.halfZone = this.halfZone.bind(this);
        this.halfVerticalZone = this.halfVerticalZone.bind(this);
        this.fullZone = this.fullZone.bind(this);
        
    }

    drawLine(lineLenght, direction) {
        console.log(lineLenght, direction);
        if(direction === 'horz'){
            let c = 'draw-cell draw-cell-' + this.props.row + ' ' + this.props.row  + '' + this.props.hour;
            this.draw.className = c + ' ' + lineLenght;
        }

        if(direction === 'vert'){
            let cv = 'draw-cell draw-cell-vertical-' + this.props.row + ' ' + this.props.row  + '' + this.props.hour;
            this.drawVert.className = cv + ' ' + lineLenght;
        }
  
    }

    render() {
        
        let quaterPosition = (this.props.positionLineBottom) ?  ' quarter-line-bottom' : ' quarter-line';
        let halfPosition = (this.props.positionLineBottom) ?  ' half-line-bottom' : ' half-line';
        let thirdPosition = (this.props.positionLineBottom) ?  ' third-quarter-line-bottom' : ' third-quarter-line';

        return (
            <div className={'box'}> 
                <div className={ 'hour-cell cell' + this.props.hour }>
                    <div onClick={ this.hourZone } className="zone-hour"></div>
                    <div onClick={ this.quarterZone } className="zone-quarter"></div>
                    <div onClick={ this.halfZone } className="zone-half"></div>
                    <div onClick={ this.halfVerticalZone } className="zone-half-vertical"></div>
                    <div onClick={ this.thirdZone } className="zone-third"></div>
                    <div onClick={ this.fullZone } className="zone-full"></div>

                    <div className={"draw-cell draw-cell-" + this.props.row + ' ' + this.props.row  + '' + this.props.hour} ref={(el) => this.draw = el }>
                    </div>
                    <div className={"draw-cell draw-cell-vertical-" + this.props.row + ' ' + this.props.row  + '' + this.props.hour} ref={(el) => this.drawVert = el }>
                    </div>
                            
                    <div  className={ 'line' + quaterPosition }></div>
                    <div  className={ 'line' + halfPosition }></div>
                    <div  className={ 'line' + thirdPosition }></div>
                        

                </div>
            </div> 
        )
    }

    hourZone() {
        this.setState((data) => data.log.push({...this.props, minutes:0}));
        this.drawLine('','horz');


    }

    quarterZone() {
        this.setState((data) => data.log.push({...this.props, minutes:15}));
        this.drawLine('draw-line-quarter', 'horz');
    }

    halfZone () {
        this.setState((data) => data.log.push({...this.props, minutes:30}));
        this.drawLine('draw-line-half', 'horz');
    }

    halfVerticalZone () {
        this.setState((data) => data.log.push({...this.props, minutes:30}));
        this.drawLine('draw-line-half-vertical','vert');

        
    }

    thirdZone() {
        this.setState((data) => data.log.push({...this.props, minutes:45}));
        this.drawLine('draw-line-third', 'horz');
    }

    fullZone() {
        this.setState((data) => data.log.push({...this.props, minutes:0}));
        this.drawLine('draw-line-full', 'horz');
    }


}

export default HourCell;