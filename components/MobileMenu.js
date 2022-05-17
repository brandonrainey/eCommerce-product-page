import React from 'react'
import Image from 'next/image'

export default function MobileMenu({ openMenu, setOpenMenu }) {
  return (
    <div className="mobileMenu">
      <div className="mobileMenuWrapper">
        <div className="closeIcon">
          <Image
            src="/icon-close.svg"
            layout="fixed"
            width={20}
            height={20}
            onClick={() => setOpenMenu(!openMenu)}
            alt="close icon"
          />
        </div>

        <nav className="mobileNav">
          <a>Collections</a>
          <a>Men</a>
          <a>Women</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </div>
      <div className="mobileScreen"></div>
    </div>
  )
}
