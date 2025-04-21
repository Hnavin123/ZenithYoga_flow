// import React from 'react'

// function Cart() {
//   return (
//     <div>Cart</div>
//   )
// }

// export default Cart

// src/components/CartButton.js

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.css';

const CartButton = () => {
  const [itemCount, setItemCount] = useState(3); // Example default

  return (
    <div className="cart-container">
      <button className="cart-btn">
        <FaShoppingCart className="cart-icon" />
        {3 > 0 && <span className="cart-count">{3}</span>}
      </button>
    </div>
  );
};

export default CartButton;
