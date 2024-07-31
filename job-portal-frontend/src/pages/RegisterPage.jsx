import React from 'react'
import { useState } from 'react';
import {Register} from '../api/user.js'
import { useNavigate, Navigate } from 'react-router-dom';

const RegisterPage = ({setCurrentUser}) => {
  const [name, setName] = useState("");
  const [email, setEmail]= useState("");
  const [mobile, setMobile] = useState(0);
  const [password, setPassword] = useState("");
  const [showLoginRedirect, setShowLoginRedirect] = useState(false);

  const handleRegister = async()=>{
    const response = await Register(name,email,mobile,password)
    console.log(response)
    if(response.status === 201){
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)
      setCurrentUser(true)
      setShowLoginRedirect(true)
    }
  }
  

  return (
    <div>
      <h1>Register</h1>
      <input 
      type="text" 
      placeholder='Enter Name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <input
      type='email'
      placeholder='Enter Email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input 
      type="number" 
      placeholder='Enter Mobile'
      value={mobile}
      onChange={(e)=>setMobile(e.target.value)}
      />
      <input 
      type="password"
      placeholder='Enter Password'
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      
      {showLoginRedirect && <Navigate to = "/login" /> }

    </div>
  )
}

export default RegisterPage