import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import MobileProductImages from '../components/MobileProductImages'
import ProductInfo from '../components/ProductInfo'
import Cart from '../components/Cart'
import MobileMenu from '../components/MobileMenu'
import useMediaQuery from '../hooks/useMediaQuery'
import DesktopProductImages from '../components/DesktopProductImages'
import Lightbox from '../components/Lightbox'

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 480px)')

  const [count, setCount] = useState(0)

  const [cartCount, setCartCount] = useState(0)

  const [open, setOpen] = useState(false)

  const [openMenu, setOpenMenu] = useState(false)

  const [openLightbox, setOpenLightbox] = useState(false)

  return (
    <div className='mainContainer'>
      {openLightbox ? <Lightbox openLightbox={openLightbox} setOpenLightbox={setOpenLightbox}/> : null}
      <Header
        open={open}
        setOpen={setOpen}
        count={count}
        setCount={setCount}
        cartCount={cartCount}
        setCartCount={setCartCount}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        isDesktop={isDesktop}
      />
      {openMenu ? (
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      ) : null}

      {open ? <Cart cartCount={cartCount} setCartCount={setCartCount} /> : null}

      <div className='mainWrapper'>
        {isDesktop ? <DesktopProductImages openLightbox={openLightbox} setOpenLightbox={setOpenLightbox}/> : <MobileProductImages />}

        <ProductInfo
          count={count}
          setCount={setCount}
          cartCount={cartCount}
          setCartCount={setCartCount}
          isDesktop={isDesktop}
        />
      </div>
    </div>
  )
}
