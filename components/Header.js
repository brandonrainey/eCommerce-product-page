import React, { useState } from 'react'
import Image from 'next/image'
import DesktopNav from './DesktopNav'


export default function Header({ open, setOpen, count, setCount, cartCount, setOpenMenu, openMenu, isDesktop }) {


  

  return (
    <div className="headerContainer">
      <div className="headerCell">
        {isDesktop ? null : <Image src="/icon-menu.svg" layout="fixed" height={20} width={20} onClick={() => setOpenMenu(!openMenu)}/>}
        
        <div className='navWrapper'>
          <header>sneakers</header>
        {isDesktop ? <DesktopNav /> : null}
        </div>
        
      </div>

      <div className="headerCell">
        <button className='cartButton' onClick={() => setOpen(!open)}>
          <Image src="/icon-cart.svg" layout="fixed" height={25} width={25} />
          <span className={`${cartCount != 0 ? 'cartCounter' : ''}`}>{cartCount != 0 ? cartCount : null}</span>
        </button>
        

        <a>
          <Image
            src="/image-avatar.png"
            layout="fixed"
            height={30}
            width={30}
          />
        </a>
      </div>
    </div>
  )
}
