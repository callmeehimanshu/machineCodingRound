import { useState } from 'react'
import CounterTest from './Counter/CounterTest'
// import StopWatchTest from './StopWatch/StopWatchTest'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterTest/>
     {/* <StopWatchTest/> */}
     
    </>
  )
}

export default App
