import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  //let counter = 5;

  const addValue = () => {
    //console.log("Value Added", Math.random());
    console.log("Click", counter);
    //counter = counter + 1;
    setCounter(counter + 1)
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h3>Counter Value : ${counter}</h3>

     <button onClick={addValue}>ADD VALUE {counter}</button>
     <br />
     <br />
     <button>REMOVE VALUE {counter}</button>

     
    </>
  )
}

export default App
