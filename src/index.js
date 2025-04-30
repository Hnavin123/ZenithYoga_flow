// import React, { createContext } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router";
// export const CartContext = createContext();
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <CartContext.Provider value={6}>
//         <App />
//       </CartContext.Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );


// reportWebVitals();





// import React, { createContext, useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { CartContext } from "./CartContext";

// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom"; // corrected to 'react-router-dom'

// export const CartContext = createContext();

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const RootApp = () => {
//   const [cartValue, setCartValue] = useState(0); // this holds the global cart count

//   return (
//     <React.StrictMode>
//       <BrowserRouter>
//         <CartContext.Provider value={{ cartValue, setCartValue }}>
//           <App />
//         </CartContext.Provider>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// };

// root.render(<RootApp />);

// reportWebVitals();



// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { CartContext } from "./CartContext"; // ✅ Correct import

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const Index = () => {
//   const [cartValue, setCartValue] = useState(0);

//   return (
//     <CartContext.Provider value={{ cartValue, setCartValue }}>
//       <App />
//     </CartContext.Provider>
//   );
// };

// root.render(<Index />);



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { CartProvider } from "./CartContext"; // your context
// import { BrowserRouter } from "react-router-dom"; // 🔥 important

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <CartProvider>
//     <BrowserRouter> 
//       <App />
//     </BrowserRouter>
//   </CartProvider>
// );





import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./CartContext"; // ✅ Named import

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
