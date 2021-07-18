import {Button} from 'antd';
import {MathKeys, Evaluation} from '../Helper/types';
import {mathFunctionalKeyToSymbol} from '../Helper/MapFunctionalKeyToSymbol';
import { formatEvaluation, calculate } from '../Helper/Calculate';
import { PresetColorTypes } from 'antd/lib/_util/colors';

export function MathFunctional({mathFunctionalKey,  prevState, setEvaluation}:{mathFunctionalKey: MathKeys, prevState: string, setEvaluation: (x:any) => void}) {
  let symbol = mathFunctionalKeyToSymbol[mathFunctionalKey]
  return (
    <Button type="primary" shape="round" onClick={() => setEvaluation(prevState.concat(` ${symbol} `))}>{symbol} </Button>
  )
} 

export function Equation({prevState, setEvaluation, setAns}:{prevState:string, setEvaluation:(x:string)=>void, setAns:(x:string)=>void}) {
  function _handleClick() {
    setAns(prevState.concat(' ='));
    let mathKeyArray = prevState.replaceAll(' ', '').match(/[-\/\*\+]/g);

    if (mathKeyArray)
    {
      let numberArray = prevState.replaceAll(' ', '').match(/\d+(\.\d{1,})?/g)?.map(ele => Number(ele))!;
      console.log('number Array ', numberArray)
      let result = calculate(mathKeyArray, numberArray);

      setEvaluation(result!.toString());
      console.log('result', result)
    } else {
      setEvaluation(prevState)
    }  
  }

  return (
    <Button className="equation" type="primary" shape="round" ghost onClick={_handleClick} >=</Button>
  )
}

export function FormatNumber({formatKey, prevState, setEvaluation}: {formatKey:string, prevState: string, setEvaluation: (x:string)=>void}) {
  function _handleClick() {
    let newEvaluation =  formatEvaluation(prevState, formatKey);
    if (newEvaluation)
    {
      setEvaluation(newEvaluation)
    }else {
      setEvaluation(prevState)
    }
    
  }
  return (
    <Button type="primary" shape="circle" onClick={_handleClick}>{formatKey} </Button>
  )
}

