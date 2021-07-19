import {Button} from 'antd';

export function AllClear({prevState, setEvaluation, setAns}:{prevState: string, setEvaluation: (x:string)=> void, setAns:(x:string)=> void}) {

  function _handleClick() {
    setAns(`Ans: ${prevState}`);
    setEvaluation("0");
  }
  return (<Button type="primary" size="large" shape="round" onClick={_handleClick}>AC</Button>)
}


export function Clear({prevState, setEvaluation}:{prevState: string, setEvaluation: (x:string)=> void}) {

  return (<Button type="primary" size="large" shape="circle" onClick={() => setEvaluation(prevState.slice(0, -1))}>C</Button>)
}