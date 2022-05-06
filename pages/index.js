import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import MobileProductImages from '../components/MobileProductImages'
import ProductInfo from '../components/ProductInfo'
import Cart from '../components/Cart'
import MobileMenu from '../components/MobileMenu'


export default function Home() {

  const [count, setCount] = useState(0)

  const [cartCount, setCartCount] = useState(0)

  const [open, setOpen] = useState(false)

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div>
      <Header open={open} setOpen={setOpen} count={count} setCount={setCount} cartCount={cartCount} setCartCount={setCartCount} setOpenMenu={setOpenMenu} openMenu={openMenu}/>
      {openMenu ? <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/> : null}
      
      {open ? <Cart cartCount={cartCount} setCartCount={setCartCount}/> : null}
      <MobileProductImages />
      <ProductInfo count={count} setCount={setCount} cartCount={cartCount} setCartCount={setCartCount}/>
    </div>
  )
}
