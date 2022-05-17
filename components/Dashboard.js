import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard({}) {
  const { currentUser, logout } = useAuth()

  return (
    <div className="loginContainer">
      <h1>Dashboard</h1>

      <div className="userWrapper">{currentUser.email}</div>

      <button className="loginButton" onClick={logout}>
        Log Out
      </button>
    </div>
  )
}
