import { useState } from 'react'
import './App.css'
import ClassBasedComponent from './components/class-based-components'
import FunctionalComponent from './components/functional-components'

function App() {

  return (
    <>
        <ClassBasedComponent/>
        <FunctionalComponent/>  
    </>
  )
}

export default App
