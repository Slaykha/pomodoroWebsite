import React, { useState, useRef, useEffect } from "react";

const Timer = () =>{
    var deneme = 50
    const [workTime, setWorkTime] = useState(5);
    const [breakTime, setBreakTime] = useState(300);
    const [seconds, setSeconds] = useState(workTime);
    const [isPause, setIsPause] = useState(false);
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
                <h1 className={isBreakTime ? "breakClock" : "workClock"}>{mins} : {secs}</h1>
            </div>
            <div>   
                <button 
                    id="spButton" 
                    onClick={() => {isPauseRef.current = !isPause; setIsPause(isPauseRef.current)}}
                >
                    {isPause ? "Start" : "Pause"}
                </button>
            </div>
            
        </div>
    );
}


export default Timer;