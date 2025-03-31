import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comonents/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='bg-amber-300 text-2xl p-4 rounded-3xl mb-4'>Tailwind Test</h1>

       <Card/>
       <Card/>

    </>
  )
}

export default App
 