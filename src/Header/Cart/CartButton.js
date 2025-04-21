import React from 'react';
import { useState, useEffect } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.css';



// const Increment = () => {
//   if (value < 15) {
//     setValue(value + 1);
//   }
// };
// const Decrement = () => {
//   if (value > 0) {
//     setValue(value - 1);
//   }
// }

const CartButton = () => {
  const[data,setData] = useState([]);
  return (
   
    // <button className="cart-btn ">
      
    //   <FaShoppingCart className="cart-icon " />
    //   Cart
      
    // </button>


    <div className="cart-container">
          <button className="cart-btn">
            <FaShoppingCart className="cart-icon" />
            Cart
            {3> 0 && <span className="cart-count">3</span>}
          </button>
        </div>
   
    
  );
};

export default CartButton;


