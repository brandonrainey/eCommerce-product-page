import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import MobileProductImages from '../components/MobileProductImages'
import ProductInfo from '../components/ProductInfo'
import Cart from '../components/Cart'


export default function Home() {

  const [count, setCount] = useState(0)

  const [cartCount, setCartCount] = useState(0)

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Header open={open} setOpen={setOpen} count={count} setCount={setCount} cartCount={cartCount} setCartCount={setCartCount}/>
      {open ? <Cart cartCount={cartCount}/> : null}
      <MobileProductImages />
      <ProductInfo count={count} setCount={setCount} cartCount={cartCount} setCartCount={setCartCount}/>
    </div>
  )
}
