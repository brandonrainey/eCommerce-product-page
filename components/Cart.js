import React from 'react'

export default function ({ cartCount }) {
  return (
    <div className="cartWrapper">
      <div className="cartContainer">
        <div className="cartTitle">Cart</div>

        <div className="cartContent">
            {cartCount > 0 ? (<div>
                    <div>
                        <img></img>
                        <div>
                            <p></p>
                            <div></div>
                        </div>
                        <button></button>
                    </div>
                    <button>Checkout</button>

            </div>) : (<p>Your cart is empty</p>)}
          
        </div>
      </div>
    </div>
  )
}
