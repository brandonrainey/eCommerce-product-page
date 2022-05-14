import { updateCurrentUser } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Login({ openSignup, setOpenSignup }) {
    const { login, currentUser, logout } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    

  return (
    <div className='loginContainer'>
      <h1>Dashboard</h1>

      <div className='userWrapper'>
        {currentUser.email}  
      </div>
      
      

      <button className='loginButton' onClick={logout}>Log Out</button>
      
    </div>
  )
}
