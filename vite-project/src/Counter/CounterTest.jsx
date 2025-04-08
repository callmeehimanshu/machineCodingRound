import React from 'react'
import { useState } from 'react'

const CounterTest = () => {
  const [count,setCount]=useState(0)
  return (
    <>
    <h2>Counter : {count} </h2>
    <button onClick={() => setCount((count) => count + 1)} >ADD</button>
    <button onClick={() => setCount(count - 1)} >SUB</button>
    </>
  )
}

export default CounterTest