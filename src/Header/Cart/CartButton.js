import React from 'react';
import { useState, useEffect } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.css';





const CartButton = () => {
  const[data,setData] = useState([]);
  return (
    <button className="cart-btn">
      <FaShoppingCart className="cart-icon" />
      Cart
    </button>
    
  );
};

export default CartButton;


