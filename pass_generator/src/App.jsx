import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useCallback react hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*+_-~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9) // password selection of first to max
    window.navigator.clipboard.writeText(password)
  }, [password])


  //useEffect Hooks
  //passwordGenerator()
  useEffect(() => {passwordGenerator()}, [length, numAllowed, charAllowed, passwordGenerator])


  //useRef hooks
  const passwordRef = useRef(null)

 

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md bg-amber-200 text-blue-400'>
        <h1 className='text-center m-auto'>Password Generator</h1>
        <div className='flex shadow rounded-4xl overflow-hidden'>
          <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked = {numAllowed}
            id = "numberInput" 
            onChange={()=> {setNumAllowed((prev)=> !prev)
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked = {charAllowed}
            id = "numberInput" 
            onChange={()=> {setCharAllowed((prev)=> !prev)
            }}/>
            <label htmlFor="numberInput">Character</label>
          </div>

        </div>
      </div>
    
    
    </>
     
  )
}

export default App
