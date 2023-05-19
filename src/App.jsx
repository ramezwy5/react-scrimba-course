import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function counts(){
    return(
      setCount(prevCount => prevCount += 1) 
    )
  }

  return (
    <div>
      <h3>{count}</h3>
      <button className='btn' onClick={counts}>Click Count</button>
    </div>
  )
}

export default App
