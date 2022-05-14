import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  

  async function signup(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function login(email, password) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password) 
        console.log(user)
      } catch (error) {
          console.log(error.message)
      }
  }

  async function logout() {
      await signOut(auth)
  }


  

  const value = {
    currentUser,
    login,
    signup,
    logout
  }

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
  })

  return unsubscribe
  }, [])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
