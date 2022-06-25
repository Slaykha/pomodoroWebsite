import React from "react";
import './App.css'
import { Icon } from '@iconify/react';

const Settings = (props)=>{

    const{
        workTime,
        setWorkTime,
        breakTime,
        setBreakTime,
        seconds,
        setSeconds,
        secs,
        mins
    }=props;

    return(
        <div>
            <div>
                <h1 className="settingsTitle">Settings</h1>
            </div>

            <div className="workTimeSettingsControl">
                <Icon  onClick={() => {workTime > 300 ? setWorkTime(workTime - 300) : console.log("Error")}} icon="akar-icons:circle-minus-fill" color="rgba(250, 235, 215, 0.834)" width="33" height="33" />
                <h1 className="workClockSettings">{parseInt(workTime / 60).toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})} : {parseInt(workTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})}</h1>  
                <Icon  onClick={() => {setWorkTime(workTime + 300)}} icon="akar-icons:circle-plus-fill" color="rgba(250, 235, 215, 0.834)" width="33" height="33 " />
            </div>

            <div className="breakTimeSettingsControl">
                <Icon  onClick={() => {breakTime > 60 ? setBreakTime(breakTime - 60) : console.log("Error")}} icon="akar-icons:circle-minus-fill" color="rgba(250, 235, 215, 0.834)" width="33" height="33" />
                <h1 className="breakClockSettings">{parseInt(breakTime / 60).toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})} : {parseInt(breakTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})}</h1>
                <Icon  onClick={() => {setBreakTime(breakTime + 60)}} icon="akar-icons:circle-plus-fill" color="rgba(250, 235, 215, 0.834)" width="33" height="33" />
            </div>
        </div>
    );
}

export default Settings