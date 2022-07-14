import React, { useState, useRef, useEffect } from "react";
import { Icon } from '@iconify/react';

const Timer = (props) =>{

    const{
        workTime,
        breakTime,
        seconds,
        setSeconds,
        secs,
        mins
    }=props;

    const [isPause, setIsPause] = useState(true);
    const [isBreakTime, setIsBreakTime] = useState(false);
    
    var isBreakTimeRef = useRef(isBreakTime);
    var isPauseRef = useRef(isPause);
    var secondsRef = useRef(seconds);

    function tick(){
        secondsRef.current--;
        setSeconds(secondsRef.current);
    }

    function breakT(){
        isBreakTimeRef.current = !isBreakTime;
        setIsBreakTime(isBreakTimeRef.current);
    }

    function setPause(pause){
        isPauseRef.current = pause;
        setIsPause(isPauseRef.current);
    }

    function secondsEdit(number){
        secondsRef.current = number;
        setSeconds(secondsRef.current);
    }
  
    useEffect(()=>{
        var interval = setInterval(() => {
            if(seconds === 0){
                breakT();
            }
            if(isPauseRef.current) return
           
           
            tick()

        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [seconds])

    useEffect(()=>{
        if(isBreakTime){
            secondsEdit(breakTime);
        }else{
            secondsEdit(workTime);
        }

    }, [isBreakTime,workTime,breakTime])
    
   /*  console.log(seconds)
    console.log(secs) */
    return(
        <div>
            <div>
                <h1 className="timerTitle">{isPause ? "Paused" : isBreakTime ? "Break Time" : "Work Time"}</h1>
            </div>

            <div className="timerClock">
                <h1 className={isBreakTime ? "breakClock" : "workClock"}>{mins.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})} : {secs.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})}</h1>
            </div>

            <div className="controlPanel">   
                <Icon className="resetButton" onClick={() => {setPause(true); secondsEdit(workTime); setIsBreakTime(false)}} icon="carbon:reset" color="rgba(250, 235, 215, 0.834)" width="60" height="60" />
                {isPause ? 
                <Icon className="startButton" onClick={() => {isPauseRef.current = !isPause; setIsPause(isPauseRef.current)}} icon="carbon:play-filled-alt" color="rgba(250, 235, 215, 0.834)" width="60" height="60" /> 
                : <Icon className="pauseButton" onClick={() => {isPauseRef.current = !isPause; setIsPause(isPauseRef.current)}} icon="carbon:pause-filled" color="rgba(250, 235, 215, 0.834)" width="60" height="60" />}
                <Icon className="nextButton" onClick={()=>breakT()} icon="carbon:skip-forward-filled" color="rgba(250, 235, 215, 0.834)" width="60" height="60" />
            </div>
        </div>
    );
}


export default Timer;
