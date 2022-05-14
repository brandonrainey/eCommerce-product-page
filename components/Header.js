import React, { useState } from 'react'
import Image from 'next/image'
import DesktopNav from './DesktopNav'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import { useAuth } from '../contexts/AuthContext'


export default function Header({ open, setOpen, count, setCount, cartCount, setOpenMenu, openMenu, isDesktop, openLogin, setOpenLogin, openSignup, setOpenSignup, }) {
  const { currentUser } = useAuth()

  function handleLoginToggle() {
    if (open) {
      setOpen(false)
    }
    setOpenSignup(false)
    setOpenLogin(!openLogin)
  }

  function handleCartToggle() {
    if (openLogin) {
      setOpenLogin(false)
      setOpenSignup(false)
    }
    setOpen(!open)
  }

  
  return (
    <div className="headerContainer">

{openLogin ? currentUser ? <Dashboard /> : <Login openSignup={openSignup} setOpenSignup={setOpenSignup} openLogin={openLogin} setOpenLogin={setOpenLogin}/> : null}
        {openSignup? <Signup openLogin={openLogin} setOpenLogin={setOpenLogin} openSignup={openSignup} setOpenSignup={setOpenSignup}/> : null}


      <div className="headerCell">
        {isDesktop ? null : <Image src="/icon-menu.svg" layout="fixed" height={20} width={20} onClick={() => setOpenMenu(!openMenu)}/>}
        
        <div className='navWrapper'>
          <header>sneakers</header>
        {isDesktop ? <DesktopNav /> : null}
        </div>
        
      </div>

      <div className="headerCell">
        <button className='cartButton' onClick={handleCartToggle}>
          <Image src="/icon-cart.svg" layout="fixed" height={25} width={25} />
          <span className={`${cartCount != 0 ? 'cartCounter' : ''}`}>{cartCount != 0 ? cartCount : null}</span>
        </button>
        

        <a onClick={handleLoginToggle}>
          <Image
            src="/image-avatar.png"
            layout="fixed"
            height={30}
            width={30}
            className='imageAvatar'
          />
        </a>

        
        
      </div>
    </div>
  )
}
