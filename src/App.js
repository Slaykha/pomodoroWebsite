import React from 'react';
import './App.css';
import Timer from './timer';
import Settings from './settings';

function App() {
  let time = 1

  return (
    <div className="App">
      <div className="clock">
        <Timer />
        <Settings/>
      </div>
    </div>
  );
}

export default App;
