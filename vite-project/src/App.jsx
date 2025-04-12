import { useState } from 'react'
import CounterTest from './Counter/CounterTest'
import StopWatchTest from './StopWatch/StopWatchTest'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterTest/>
     <StopWatchTest/>
     <p>unnecessary commit 1</p>
     <p>unnecessary commit 2</p>
    </>
  )
}

export default App
