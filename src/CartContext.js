
// import { createContext } from 'react';

// export const CartContext = createContext();



// import React, { createContext, useState } from "react";

// // Create CartContext
// export const CartContext = createContext();

// // CartProvider to manage cart value
// export const CartProvider = ({ children }) => {
//   const [cartValue, setCartValue] = useState(0);

//   return (
//     <CartContext.Provider value={{ cartValue, setCartValue }}>
//       {children}
//     </CartContext.Provider>
//   );
// };




import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);

  return (
    <CartContext.Provider value={{ cartValue, setCartValue }}>
      {children}
    </CartContext.Provider>
  );
};
