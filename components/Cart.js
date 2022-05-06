import React from 'react'
import Image from 'next/image'

export default function Cart({ cartCount, setCartCount }) {


  

  return (
    <div className="cartWrapper">
      <div className="cartContainer">
        <div className="cartTitle">Cart</div>

        <div className="cartContent">
          {cartCount > 0 ? (
            <div>
              <div className="itemWrapper">
                <div className="imgThumbnail">
                  <Image
                    src="/image-product-1-thumbnail.jpg"
                    layout="fixed"
                    
                    height={50}
                    width={50}
                  />
                </div>
                <div className="itemDescription">
                  <p>Autumn Limited Edition...</p>
                  <div className="priceInfo">
                    $125.00 x {cartCount}{' '}
                    <span className="priceTotal">${125 * cartCount}.00</span>
                  </div>
                </div>
                <button className="deleteButton" onClick={() => setCartCount(0)}>
                  <Image
                    src="/icon-delete.svg"
                    layout="fixed"
                    height={15}
                    width={15}
                  />
                </button>
              </div>
              <button className="checkoutButton">Checkout</button>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  )
}
