import React, {useState} from 'react';
import './App.css';
import Timer from './timer';
import Settings from './settings';

function Main() {
  const [workTime, setWorkTime] = useState(1200);
  const [breakTime, setBreakTime] = useState(300);
  const [seconds, setSeconds] = useState(workTime);

  var secs = parseInt(seconds % 60);
  var mins = parseInt(seconds / 60);

  return (
    <div className="Main">
      <div className="clock">
        <Timer 
          workTime={workTime}
          breakTime={breakTime}
          seconds={seconds}
          setSeconds={setSeconds}
          secs={secs}
          mins={mins}
        />
      </div>
      <div className="settings">
        <Settings 
          workTime={workTime}
          setWorkTime={setWorkTime}
          breakTime={breakTime}
          setBreakTime={setBreakTime}
          seconds={seconds}
          setSeconds={setSeconds}
          secs={secs}
          mins={mins}
        />
      </div>
    </div>
  );
}

export default Main;
