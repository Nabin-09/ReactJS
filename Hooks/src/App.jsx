import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter , setCounter] = useState(0)
  // let counter = 5

  const addValue = () =>{
    if(Counter < 20) setCounter(Counter + 1)
    else setCounter(Counter = 20)
  }
  const removeValue = () =>{
    if(Counter > 0) setCounter(Counter-1)
    else setCounter(Counter = 0)
  }
  return (
    <>
      <h1>Nabin is goat</h1>
      <h2>Counter value  : {Counter}</h2>
      <br />
      <button
      onClick={addValue}
      >Add Value</button> <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
