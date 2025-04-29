import React from 'react';
import { useState } from 'react'



function App() {
  const [length , setLength] = useState(8)
  const [numall, setnumall] = useState(false)
  const [charall , setCharall] = useState(false)
  return (
    <>
      <h1 className='text-7xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
