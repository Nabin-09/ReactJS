import { useState } from 'react'
import './App.css'
import ClassBasedComponent from './components/class-based-components'
import FunctionalComponent from './components/functional-components'
import ProductList from './components/products'
import ContextButtonComponent from './components/create-context/button'

function App() {

  return (
    <>
        {/* <ClassBasedComponent/>
        <FunctionalComponent/>   */}
        {/* <ProductList name = "Nabin" city = "Siliguri"/> */}
        <ContextButtonComponent/>
        <ContextButtonComponent/>
    </>
  )
}

export default App
