import {Button} from 'antd';

const INITIAL_EVALUATION = "0"

export function Number({number, prevState, setEvaluation}:{number:string, prevState:string, setEvaluation: (x:any) => void}) {
  return (
    <>
    <Button type="primary" size="large" shape="circle" ghost onClick={() => setEvaluation(prevState === INITIAL_EVALUATION ? number: prevState.concat(number))}>{number} </Button>
    </>
  )
}