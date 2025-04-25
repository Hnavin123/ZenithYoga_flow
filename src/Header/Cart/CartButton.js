import React, { useContext } from "react";
import { useState, useEffect } from "react";

import { FaShoppingCart } from "react-icons/fa";
import "./CartButton.css";
import { CartContext } from "../..";

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
  const theme = useContext(CartContext);
  // const[data,setData] = useState([]);
  return (
    // <button className="cart-btn ">

    //   <FaShoppingCart className="cart-icon " />
    //   Cart

    // </button>

    <div className="cart-container">
      <button className="cart-btn">
        <FaShoppingCart className="cart-icon" />
        Cart
        {3 > 0 && <span className="cart-count">{theme}</span>}
      </button>
    </div>
  );
};

export default CartButton;
