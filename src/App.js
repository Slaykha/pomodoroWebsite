import React from 'react';
import './App.css';
import Timer from './timer';

function App() {
  let time = 1

  return (
    <div className="App">
      <div className="clock">
        <Timer />
      </div>
    </div>
  );
}

export default App;
