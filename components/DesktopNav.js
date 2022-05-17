import React, { useState } from 'react'

export default function DesktopNav() {
  const [navItem, setNavItem] = useState()

  return (
    <div className="desktopNav">
      <a
        onClick={() => setNavItem(1)}
        className={`${navItem == 1 ? 'navHighlight' : ''}`}
        href=""
      >
        Collections
      </a>
      <a
        onClick={() => setNavItem(2)}
        className={`${navItem == 2 ? 'navHighlight' : ''}`}
        href=""
      >
        Men
      </a>
      <a
        onClick={() => setNavItem(3)}
        className={`${navItem == 3 ? 'navHighlight' : ''}`}
        href=""
      >
        Women
      </a>
      <a
        onClick={() => setNavItem(4)}
        className={`${navItem == 4 ? 'navHighlight' : ''}`}
        href=""
      >
        About
      </a>
      <a
        onClick={() => setNavItem(5)}
        className={`${navItem == 5 ? 'navHighlight' : ''}`}
        href=""
      >
        Contact
      </a>
    </div>
  )
}
