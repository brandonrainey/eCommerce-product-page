import React from 'react'
import Image from 'next/image'

export default function ProductInfo({
  count,
  setCount,
  cartCount,
  setCartCount,
}) {
  function addCount() {
    setCount(count + 1)
  }

  function subtractCount() {
    if (count != 0) {
      setCount(count - 1)
    }
  }

  function addToCart() {
    setCartCount(cartCount + count)
  }

  return (
    <div className="productInfoContainer">
      <header className="companyTitle">SNEAKER COMPANY</header>
      <header className="productTitle">Fall Limited Edition Sneakers</header>
      <p className="productDesription">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, theyll withstand everything the
        weather can offer.
      </p>

      <div>
        <div className="priceContainer">
          <div className="priceWrapper">
            <div className="price">$125.00</div>
            <div className="discount">50%</div>
          </div>
          <div className="originalPrice">$250.00</div>
        </div>

        <div className="countContainer">
          <div className="countWrapper">
            <button className="minus" onClick={subtractCount}>
              -
            </button>
            <div className="count">{count}</div>
            <button className="plus" onClick={addCount}>
              +
            </button>
          </div>
          <button className="addToCart" onClick={addToCart}>
            <Image
              src="/icon-cart-white.svg"
              layout="fixed"
              width={16}
              height={16}
              className="cartIcon"
              alt="cart icon"
            />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
