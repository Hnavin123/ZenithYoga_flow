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

import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Description from './Description/Description';
import Footer from './Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Description />
      </div>
      <Footer />
    </div>
  );
};

export default App;
