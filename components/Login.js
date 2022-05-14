import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Login({ openSignup, setOpenSignup, openLogin, setOpenLogin }) {
  const { login } = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to log in')
    }
  }

  function handleSignup() {
    setOpenLogin(false)
    setOpenSignup(true)
  }

  return (
    
      <div className="loginContainer">
      <h1>Log In</h1>
      {error}
      <form className="formContainer" onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Email" ref={emailRef} />
        </label>
        <label>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </label>

        <div className="buttonWrapper">
          <button className="loginButton" type="submit">
            Log In
          </button>
          <div onClick={handleSignup} className='signup'>Sign up</div>
        </div>
      </form>
    </div>
    
      
    
    
  )
}
