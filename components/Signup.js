import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Signup({ openLogin, setOpenLogin, openSignup, setOpenSignup }) {
    const { signup } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
          setError('')
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
          setError('Failed to sign up')
        }

        setLoading(false)
        console.log('pressed')
    }

    function handleLogin() {
      setOpenLogin(true)
      setOpenSignup(false)
    }

  return (
    <div className='loginContainer'>
      <h1>Sign Up </h1>
      {error}
      <form className='formContainer' onSubmit={handleSubmit}>
        <label>
          
          <input type="text" placeholder='Email' ref={emailRef}/>
        </label>
        <label>
          
          <input type='password' placeholder='Password' ref={passwordRef}/>
        </label>
        <label>
            <input type='password' placeholder='Confirm Password' ref={passwordConfirmRef}/>
        </label>


        <div className='buttonWrapper'>
        <button className='signupButton' type='submit'>Sign Up</button>
      <div onClick={handleLogin} className='signup'>Log In</div>
    </div>
      </form>
    
      
    </div>
  )
}
