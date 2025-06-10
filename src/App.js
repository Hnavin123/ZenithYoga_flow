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

import React from "react";
import Description from "./Description/Description";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./SideBar/SideBar";
import { Route } from "react-router";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div style={{ display: "flex" }}>
        <div className="main-body">
          <div className="menu">
            <Sidebar />
          </div>
          <div className="main">
            <Description />
          </div>
          <div className="main-content">
            <div>
              <Route />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
        {/* </CartProvider> */}
      </div>
    </>
  );
};

export default App;
