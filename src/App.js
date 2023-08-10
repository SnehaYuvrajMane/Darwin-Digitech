
import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>

   </Routes>
    {/* <Login/> */}
   </>
  )
}

export default App