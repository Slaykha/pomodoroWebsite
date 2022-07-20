import React, {useEffect, useState} from 'react';
import './App.css';
import Timer from './timer';
import Settings from './settings';
import { Icon } from '@iconify/react';
import NavItem from './NavItem';
import Nav from './Nav';

function Main() {
  const [workTime, setWorkTime] = useState(1200);
  const [breakTime, setBreakTime] = useState(300);
  const [seconds, setSeconds] = useState(workTime);
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [images, setImages] = useState([require('./images/leafs.jpg'), require('./images/sands.jpg'), require('./images/stars.jpg'), require('./images/sands2.jpg')])
  const [backgroundImage, setBackgroundImage] = useState(images[0])

  var secs = parseInt(seconds % 60);
  var mins = parseInt(seconds / 60);

  const setSettingsOpen = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }
  
  return (
    <div className="Main" style={{
      backgroundImage: "url("+ backgroundImage +")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"}}>
    <Nav>
      <NavItem>

        <button className="settingsToggleButton" onClick={()=>setSettingsOpen()}>
          {isSettingsOpen ?
          <Icon icon="bxs:toggle-left" color="rgba(250, 235, 215, 0.834)" width="60" height="60" />
          : <Icon icon="bxs:toggle-right" color="rgba(250, 235, 215, 0.834)" width="60" height="60" />}
        </button>
        <p>Settings</p>
      </NavItem>
      <NavItem>
        <img src={images[0]} onClick={() => setBackgroundImage(images[0])}></img> 
      </NavItem>
      <NavItem>
        <img src={images[1]} onClick={() => setBackgroundImage(images[1])}></img> 
      </NavItem>
      <NavItem>
        <img src={images[2]} onClick={() => setBackgroundImage(images[2])}></img> 
      </NavItem>
      <NavItem>
        <img src={images[3]} onClick={() => setBackgroundImage(images[3])}></img> 
      </NavItem>
    </Nav>
     {/* <NavItem icon={<Icon icon="carbon:settings" color="rgba(250, 235, 215, 0.834)" width="30" height="30" />}>
        <DropdownMenu>
          <button className="settingsToggleButton" onClick={()=>setSettingsOpen()}>
            {isSettingsOpen ?
            <Icon icon="bxs:toggle-left" color="rgba(250, 235, 215, 0.834)" width="60" height="60" />
            : <Icon icon="bxs:toggle-right" color="rgba(250, 235, 215, 0.834)" width="60" height="60" />}
          </button>
          <p>Settings</p>
        </DropdownMenu>
            </NavItem>*/}


      
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
        {isSettingsOpen
        && <Settings 
          workTime={workTime}
          setWorkTime={setWorkTime}
          breakTime={breakTime}
          setBreakTime={setBreakTime}
          seconds={seconds}
          setSeconds={setSeconds}
          secs={secs}
          mins={mins}
        />}
      </div>
    </div>
  );
}

export default Main;
