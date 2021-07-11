import React, { useState } from 'react';
import { Number } from './Components/Number';
import './App.css';

function App() {
  const [numberInDisplay, setNumberInDisplay] = useState<number[]>([]);

  return (
    <div className="App">
      {
        Array.from(Array(10).keys()).map(ele => 
          <Number number={ele} key={ele} prevState={numberInDisplay} setNumberInDisplay={setNumberInDisplay}/>
        )
      }
      <div>{numberInDisplay}</div>
    </div>
  );
}

export default App;
