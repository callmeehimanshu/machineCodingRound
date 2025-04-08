import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const StopWatchTest = () => {
    const [count,setCount]=useState(0);
    const refId=useRef(0);
    const [toggle,settoggle]=useState(false);
    
    const start=()=>{
        refId.current=setInterval(()=>{
            setCount((count)=>count+1)
        },1000)
        settoggle(!toggle)
    }
    const reset=()=>{
      clearInterval(refId.current);
       setCount(0)
       settoggle(false)
    }
    const stop=()=>{
      clearInterval(refId.current);
      settoggle(false)
   }
  return (
    <div>
      <h3>{count}</h3>
      <button disabled={toggle} onClick={()=>start()}>Start</button>
      <button onClick={()=>stop()}>Stop</button>
      <button onClick={()=>reset()}>Restart</button>
    </div>
  )
}

export default StopWatchTest