import { Children, createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = () => {
  const [cart, setCart] = useState(0);

  return <CartContext.Provider value={cart}></CartContext.Provider>;
};

export default CartProvider;
