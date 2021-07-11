import {Button} from 'antd';

export function Number({number, prevState, setNumberInDisplay}:{number:number,prevState:number[], setNumberInDisplay: (x:any) => void}) {
  return (
    <>
    <Button type="primary" shape="circle" ghost onClick={() => setNumberInDisplay([...prevState, number])}>{number} </Button>
    </>
  )
}