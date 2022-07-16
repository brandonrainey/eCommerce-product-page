import React, { useState } from 'react'

export default function DesktopNav() {
  const [navItem, setNavItem] = useState()

  function handleNavClick(e) {
    e.preventDefault()

    setNavItem(e.target.name)
  }

  return (
    <div className="desktopNav">
      <a
        onClick={(e) => {
          handleNavClick(e)
        }}
        className={`${navItem == 1 ? 'navHighlight' : ''}`}
        href=""
        name='1'
      >
        Collections
      </a>
      <a
        onClick={(e) => {
          handleNavClick(e)
        }}
        className={`${navItem == 2 ? 'navHighlight' : ''}`}
        href=""
        name='2'
      >
        Men
      </a>
      <a
        onClick={(e) => {
          handleNavClick(e)
        }}
        className={`${navItem == 3 ? 'navHighlight' : ''}`}
        href=""
        name='3'
      >
        Women
      </a>
      <a
        onClick={(e) => {
          handleNavClick(e)
        }}
        className={`${navItem == 4 ? 'navHighlight' : ''}`}
        href=""
        name='4'
      >
        About
      </a>
      <a
        onClick={(e) => {
          handleNavClick(e)
        }}
        className={`${navItem == 5 ? 'navHighlight' : ''}`}
        href=""
        name='5'
      >
        Contact
      </a>
    </div>
  )
}
