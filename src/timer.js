import React, { useState, useRef, useEffect } from "react";
import { Icon } from '@iconify/react';

const Timer = () =>{
    var deneme = 50
    const [workTime, setWorkTime] = useState(1200);
    const [breakTime, setBreakTime] = useState(300);
    const [seconds, setSeconds] = useState(workTime);
    const [isPause, setIsPause] = useState(true);
    const [isBreakTime, setIsBreakTime] = useState(false);
    
    var isBreakTimeRef = useRef(isBreakTime);
    var isPauseRef = useRef(isPause);
    var secondsRef = useRef(seconds);

    var secs = parseInt(seconds % 60);
    var mins = parseInt(seconds / 60 )

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

    }, [isBreakTime])
    
   /*  console.log(seconds)
    console.log(secs) */
    return(
        <div>
            <h1 className="topS">{isPause ? "Paused" : isBreakTime ? "Break Time" : "Work Time"}</h1>
            <div>
                <h1 className={isBreakTime ? "breakClock" : "workClock"}>{mins.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})} : {secs.toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false})}</h1>
            </div>
            <div className="controlPanel">   
                <Icon onClick={() => {setPause(true); secondsEdit(workTime); setIsBreakTime(false)}} icon="carbon:reset" color="#607625" width="60" height="60" />
                {isPause ? 
                <Icon  onClick={() => {isPauseRef.current = !isPause; setIsPause(isPauseRef.current)}} icon="carbon:play-filled-alt" color="#607625" width="60" height="60" /> 
                : <Icon  onClick={() => {isPauseRef.current = !isPause; setIsPause(isPauseRef.current)}} icon="carbon:pause-filled" color="#607625" width="60" height="60" />}
                <Icon onClick={()=>breakT()} icon="carbon:skip-forward-filled" color="#607625" width="60" height="60" />
            </div>
        </div>
    );
}


export default Timer;
