// CartButton.js
// import React from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import './CartButton.css'; // Import CSS for styling

// const CartButton = () => {
//   return (
//     <button className="cart-button">
//       <FaShoppingCart className="cart-icon" />
//       Cart
//     </button>
//   );
// };

// export default CartButton;



import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.css';

const CartButton = () => {
  return (
    <button className="cart-btn">
      <FaShoppingCart className="cart-icon" />
      Cart
    </button>
  );
};

export default CartButton;


