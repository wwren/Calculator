import React, {useState } from 'react';
import { Number } from './Components/Number';
import { MathFunctional, Equation, FormatNumber } from './Components/Functional';
import { AllClear, Clear } from './Components/Clear';
import './App.css';
import { MathKeys } from './Helper/types';
import {Toggle} from './Components/Toggle';



function App() {
  const [evaluation, setEvaluation] = useState<string>("0");
  const [ans, setAns] = useState<string>(" ");
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <>
    <div className ="theme-toggle" > 
      <Toggle setToggle={setToggled} toggled={toggled} /> 
    </div>
    <div className="calculator">
    <div className="output">
      <div className="ans"> {ans} </div>  
      <div className="evaluation">{evaluation}</div>
    </div>
    <div className="functionKey-top">
      {
        ["%", "."].map(ele => <FormatNumber key={ele} formatKey={ele} prevState={evaluation} setEvaluation={setEvaluation}></FormatNumber>)
      }
      <Clear prevState={evaluation} setEvaluation={setEvaluation} />
      <AllClear prevState={evaluation} setEvaluation={setEvaluation} setAns={setAns} />   
    </div>
    <div className="container">
      <div className="number">
        {
          Array.from(Array(10).keys()).reverse().map(ele => 
            <Number key={ele} number={`${ele}`} prevState={evaluation} setEvaluation={setEvaluation}/>
          )
        }
        <Equation prevState={evaluation} setEvaluation={setEvaluation} setAns={setAns}/>
      </div>
      <div className="mathFunction"> 
      {
        ["plus", "minus", "multiple", "divide"].map(ele => 
          <MathFunctional mathFunctionalKey={ele as MathKeys} prevState={evaluation} setEvaluation={setEvaluation} key={ele} />          )
      }
      </div>
      <div>      
      </div>    
    </div>
    </div>
    </>
  );
}

export default App;
