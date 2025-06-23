import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailWind </h1>

      {/* Tailwind Sample Card */}
      <div className="max-w-sm mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg bg-white p-6 transition duration-300 hover:shadow-xl">
        <img
          className="w-full rounded-xl"
          src="https://source.unsplash.com/400x200/?nature"
          alt="Nature"
        />
        <div className="pt-4">
          <h2 className="text-xl font-bold text-gray-800">Sample Card</h2>
          <p className="text-gray-600 mt-2">
            This is a simple card using Tailwind CSS and React.
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            ❤️ Like
          </button>
          <p className="text-sm text-gray-500 mt-1">Likes: {count}</p>
        </div>
      </div>
    </>
  )
}
//props can make components reusable

export default App
