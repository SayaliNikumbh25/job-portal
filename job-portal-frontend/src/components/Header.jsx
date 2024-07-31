import React from 'react'
import userAvatar from '../assets/avatar.jpg'
import { useNavigate } from 'react-router-dom'

const Header = ({ currentUser, setCurrentUser}) => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>JobFinder</h1>
        {currentUser ? 
            <>
            
            <div>
                <button 
                    onClick={()=>{
                        setCurrentUser(false);
                        localStorage.removeItem("token")
                        navigate("/login")
                    }}>Logout</button>
                <h4>Hello! Recruiter</h4>
                <div><img src={userAvatar} alt="" height={"50px"} /></div>
            </div>
            </>
            
        :<>
        <div>
            <button 
                onClick={()=>{
                    navigate("/login")
                }}>Login</button>
            <button
                 onClick={()=>{
                    navigate("/register")
                }}>Register</button>
        </div>
        </>}
    </div>
  )
}

export default Header