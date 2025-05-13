// import React from 'react';
// import Header from './Header/Header';
// import Sidebar from './Sidebar/Sidebar';
// import Description from './Description/Description';
// import Footer from './Footer/Footer';

// const App = () => {
//   return (
//     <div className="container">
//       <Header />
//       <div className="main-content">
//         <Sidebar />
//         <Description />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

<<<<<<< Updated upstream
// import React from "react";
// import Description from "./Description/Description";
// import Footer from "./Footer/Footer";
// import "./App.css";
// import Header from "./Header/Header";
// import SideBar from "./SideBar/SideBar";
// import Rout from "./Routing/Routing";
// // import CartProvider from "./CartContext";
// import { CartProvider } from "./CartContext"; // ✅ Correct


// const App = () => {
//   return (
//     <>
//       <div className="header">
//         <Header />
//       </div>
//       <div style={{ display: "flex" }}>
//         {/* <div className='main-body'> */}
//         <div className="sideBar">
//           <SideBar />
//         </div>
//         <div className="main-content">
//           <div>
//             <Rout />
//           </div>
//           <div className="footer">
//             <Footer />
//           </div>
//         </div>
//         {/* </div> */}
//       </div>
//     </>
//   );
// };

// export default App;






import React from "react";
import Description from "./Description/Description";
import Footer from "./Footer/Footer";
import "./App.css";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Rout from "./Routing/Routing";
import { CartProvider } from "./CartContext"; // ✅ Correct

const App = () => {
  return (
    <CartProvider>
      <div className="header">
        <Header />
      </div>
      <div style={{ display: "flex" }}>
        <div className="sideBar">
          <SideBar />
=======
import React from 'react';
import Description from './Description/Description';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './SIdebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <>
      <div className='header'><Header /></div>
      <div style={{ display: 'flex' }}>
        <div className='main-body'>
        <div className="menu"><Sidebar /></div>
        <div className='main'>
          <Description />
>>>>>>> Stashed changes
        </div>
        <div className="main-content">
          <div>
            <Rout />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
