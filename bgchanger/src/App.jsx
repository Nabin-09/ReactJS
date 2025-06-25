import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div
        className="w-full h-screen transition-colors duration-1000"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >Test</div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white"></div>

      </div>
    </>
  )
}

export default App
