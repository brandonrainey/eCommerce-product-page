import React, { useState } from 'react'

export default function DesktopNav() {

  const [navItem, setNavItem] = useState()

  return (
    <div className='desktopNav'>
        <a onClick={() => setNavItem(1)} className={`${navItem == 1 ? 'navHighlight' : ''}`}>Collections</a>
        <a onClick={() => setNavItem(2)} className={`${navItem == 2 ? 'navHighlight' : ''}`}>Men</a>
        <a onClick={() => setNavItem(3)} className={`${navItem == 3 ? 'navHighlight' : ''}`}>Women</a>
        <a onClick={() => setNavItem(4)} className={`${navItem == 4 ? 'navHighlight' : ''}`}>About</a>
        <a onClick={() => setNavItem(5)} className={`${navItem == 5 ? 'navHighlight' : ''}`}>Contact</a>
    </div>
  )
}
