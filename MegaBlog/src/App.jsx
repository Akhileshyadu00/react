import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'





function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  //console.log(import.meta.env.VITE_APP_APPWRITE_URL);
  

  return !loading ? (<div className="min-h-sc bg-green-400 ">
    <div className="w-full block"></div>
    <Header/>
    <main>
      TODO: {<outlet/>}
    </main>
    <Footer/>
  </div>) : null
}

export default App
