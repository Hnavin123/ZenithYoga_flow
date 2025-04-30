import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartButton.css";
import { CartContext } from "../../CartContext";  // Correct path to CartContext

const CartButton = () => {
  const { cartValue } = useContext(CartContext);  // Destructure the cartValue from context
  
  return (
    <div className="cart-container">
      <button className="cart-btn">
        <FaShoppingCart className="cart-icon" />
        Cart
        {cartValue > 0 && <span className="cart-count">{cartValue}</span>}  {/* Show count if cartValue > 0 */}
      </button>
    </div>
  );
};

export default CartButton;
