import React, {useState } from 'react';
import { Number } from './Components/Number';
import { MathFunctional, Equation, FormatNumber } from './Components/Functional';
import { AllClear, Clear } from './Components/Clear';
import './App.css';
import { MathKeys } from './Helper/types';


function App() {
  const [evaluation, setEvaluation] = useState<string>("0");
  const [ans, setAns] = useState<string>("");

  return (
    <>
    <div className="output">
      <div className="ans"> {ans} </div>  
      <div className="evaluation">{evaluation}</div>
    </div>
    <div>
      {
        ["%", "."].map(ele => <FormatNumber key={ele} formatKey={ele} prevState={evaluation} setEvaluation={setEvaluation}></FormatNumber>)
      }
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
        <AllClear prevState={evaluation} setEvaluation={setEvaluation} setAns={setAns} />
        <Clear prevState={evaluation} setEvaluation={setEvaluation} />
      </div>    
    </div>
    </>
  );
}

export default App;
