import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  //let counter = 5;

  const addValue = () => {
    //console.log("Value Added", Math.random());
    
    //counter = counter + 1;
    setCounter(counter + 1)
    //console.log("Click", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h3>Counter Value : ${counter}</h3>

     <button onClick={addValue}>ADD VALUE {counter}</button>
     <br />
     <br />
     <button onClick={removeValue}>REMOVE VALUE {counter}</button>

     
    </>
  )
}

export default App
