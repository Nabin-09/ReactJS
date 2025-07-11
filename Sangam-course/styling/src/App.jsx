import { useState } from 'react'
import './App.css'
import ClassBasedComponent from './components/class-based-components'
import FunctionalComponent from './components/functional-components'
import ProductList from './components/products'

function App() {

  return (
    <>
        {/* <ClassBasedComponent/>
        <FunctionalComponent/>   */}
        <ProductList name = "Nabin" city = "Siliguri"/>
    </>
  )
}

export default App
