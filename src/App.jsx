import React from "react"
import './App.css'

//components
import Form from "./components/Form"

// App Function

function App() {

  const [count, setCount] = React.useState(0)


  function counts(event){
      event.preventDefault()
      setCount(prevCount => prevCount += 1)
  }

  return (
    <div>
      <form>
          <h3>{count}</h3>
          <button className='btn' onClick={counts}>Click Count</button>
      </form>
      <Form />
    </div>
  )
}

export default App
