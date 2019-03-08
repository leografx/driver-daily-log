import React, { Component } from 'react';
import HourLabels from './hour-labels/HourLabels';
import OffDutyRow from './off-duty-row/OffDutyRow';
import './App.css';
import SleeperBerthRow from './sleeper-berth-row/SleeperBerthRow';
import DrivingRow from './driving-row/DrivingRow';
import OnDutyRow from './on-duty-row/OnDutyRow';

class App extends Component {
    render() {
      const headingStyle = {
        textAlign: 'left'
      }
        return ( 
          <div className="App container" >
          <h1 style={headingStyle}>DRIVER DAILY LOG</h1>
                
                <HourLabels/>
                
                <div className="row-label">1. OFF DUTY</div>
               <OffDutyRow clickedOn="Off Duty"></OffDutyRow>   
               
               <div className="row-label">2. SLEEPER BERTH</div>
               <SleeperBerthRow clickedOn="Sleeper Berth"></SleeperBerthRow>  
               
               <div className="row-label">3. DRIVING</div>
               <DrivingRow clickedOn="Driving"></DrivingRow>    

                              <div className="row-label">4. ON DUTY <br/> <span className="small">(NOT DRIVING)</span></div>
               <OnDutyRow clickedOn="On Duty"></OnDutyRow>      
          </div>
        );
    }
}

export default App;