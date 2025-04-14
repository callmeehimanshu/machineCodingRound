import { useState } from 'react'
import CounterTest from './Counter/CounterTest'
import StopWatchTest from './StopWatch/StopWatchTest'
import './App.css'
import TodoTest from './ToDo/TodoTest'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterTest/>
     <StopWatchTest/>
     <TodoTest/>
     <p>remove this change</p>
    </>
  )
}

export default App
