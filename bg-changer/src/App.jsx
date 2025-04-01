import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor] = useState("grey")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    
    >
      <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-1 shadow-2xl bg-white  px-4 py-2 rounded-4xl'>
          <button 
          onClick={() => setColor("red")}  //onClick require function not return value
          className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor: "green"}}>RED</button>
           <button
           onClick={() => setColor("green")} 
            className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor: "green"}}>GREEN</button>
           <button 
           onClick={() => setColor("blue")} 
           className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor: "green"}}>BlUE</button>
           <button
           onClick={() => setColor("yellow")} 
           className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor: "green"}}>YELLOW</button>
           <button
           onClick={() => setColor("orange")} 
           className='outline-none px-4 py-1 rounded-full '
          style={{backgroundColor: "green"}}>ORANGE</button>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
