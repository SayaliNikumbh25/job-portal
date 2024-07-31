import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Login} from '../api/user.js'

const LoginPage = ({setCurrentUser}) => {
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(()=>{
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password")

    if(storedEmail){
      setEmail(storedEmail)
    }
    if(storedPassword){
      setPassword(storedPassword)
    }
  },[])
  
  const handleLogin = async()=>{
    const response = await Login(email,password);
    console.log(response)
    if(response.status === 200){
      setCurrentUser(true)
      localStorage.setItem("token", response.data.Token);
      navigate('/');
    }
    
  }

  return (
    <div>
      <h1>Login</h1>
      <input
      type='email'
      placeholder='Enter Email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input 
      type="password"
      placeholder='Enter Password'
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      

    </div>
  )
}

export default LoginPage