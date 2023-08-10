import React, { useState } from 'react'
import humanbody from './humanbody.jpg';
import './Login.css';
import axios from "axios";

const Login = () => {
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')


  const handleUsername=(e)=>{
    setUsername(e.target.value)

  }
  const handlePass=(e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(username,password);
    // const data = {
    //   uid:username,
    //   password:password,
    //   blocked:0
    // }
    // var enc = btoa(data)
    // console.log(enc);
    // enc = new Buffer(data).toString('base64')
    // console.log(enc);
   const res = await axios.post("https://myphysio.digitaldarwin.in/api/login_v1/",{
      payload:"eyJ1aWQiOiJzYXRtaXMxMDAwMCIsInBhc3N3b3JkIjoiQXNkZjEyMzQjIiwiYmxvY2tlZCI6MH0="
    })

    console.log(res);
    const token = res.response;
    localStorage.setItem("token",token)

  }

  return (
    <div className='login'>
        <div className='left'>
            <img src={humanbody} alt="img cannot be loaded" />
        </div>
        <div className='right'>
            <form>
           <h1>SAI
           </h1>
           <h2>NCSSER</h2>
          <p className='para'>Welcome Back!</p>
             
            <p>forget Password ? 
            <span> Build Date 24-03-2023</span></p>
            <label >Username</label><br/>
            <input type="text" value={username} onChange={handleUsername} />
            <br/>
            <label>Password</label><br/>
            <input type="password" value={password} onChange={handlePass}/>
            <br/>
            <button className='btn' onClick={handleSubmit}>Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login