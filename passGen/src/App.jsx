import React from 'react';
import { useState , useCallback } from 'react'



function App() {
  const [length , setLength] = useState(8)
  const [numall, setnumall] = useState(false)
  const [charall , setCharall] = useState(false) 
  const [password , setPassword] = useState("")

  const passGenerator = useCallback(() =>{
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numall) str+= "0123456789"
    if(charall) str+= "@_+=&*#"

    

  } , [length , numall , charall, setPassword])

  return (
    <>
      <h1 className='text-7xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
