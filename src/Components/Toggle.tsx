import './Toggle.css'

export function Toggle({toggled, setToggle}: {toggled:boolean, setToggle: (x:boolean)=> void}) {
  return (
    <div style={{maxWidth:'80px',margin:'auto'}} onClick={() => setToggle(!toggled)}>
      <div className={`socket ${toggled?'night':''}`}>
        <div className={`sun ${toggled?'night':''}`}></div>
        <div className={`shade ${toggled?'night':''}`} >
          <div className="sm"></div>
          <div className="md"></div>
        </div>
        
      </div>
    </div>
  )
}