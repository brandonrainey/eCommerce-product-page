import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import MobileProductImages from '../components/MobileProductImages'
import ProductInfo from '../components/ProductInfo'
import Cart from '../components/Cart'
import MobileMenu from '../components/MobileMenu'
import useMediaQuery from '../hooks/useMediaQuery'
import DesktopProductImages from '../components/DesktopProductImages'
import Lightbox from '../components/Lightbox'
import { AuthProvider } from '../contexts/AuthContext'


export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 480px)')

  const [count, setCount] = useState(0)

  const [cartCount, setCartCount] = useState(0)

  const [open, setOpen] = useState(false)

  const [openMenu, setOpenMenu] = useState(false)

  const [openLightbox, setOpenLightbox] = useState(false)

  const [openLogin, setOpenLogin] = useState(false)

  const [openSignup, setOpenSignup] = useState(false)

  return (
    <AuthProvider>
      <div className="mainContainer">
        <Head>
          <meta name="description" content="ecommerce product page"></meta>
          <title>eCommerce Product Page</title>
        </Head>
        {openLightbox ? (
          <Lightbox
            openLightbox={openLightbox}
            setOpenLightbox={setOpenLightbox}
          />
        ) : null}
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
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          openSignup={openSignup}
          setOpenSignup={setOpenSignup}
        />
        {openMenu ? (
          <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        ) : null}

        {open ? (
          <Cart cartCount={cartCount} setCartCount={setCartCount} />
        ) : null}

        <div className="mainWrapper">
          {isDesktop ? (
            <DesktopProductImages
              openLightbox={openLightbox}
              setOpenLightbox={setOpenLightbox}
            />
          ) : (
            <MobileProductImages />
          )}

          <ProductInfo
            count={count}
            setCount={setCount}
            cartCount={cartCount}
            setCartCount={setCartCount}
            isDesktop={isDesktop}
          />
        </div>
      </div>
    </AuthProvider>
  )
}
