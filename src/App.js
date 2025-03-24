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
import Description from './Description/Description';
import Footer from './Footer/Footer';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Rout from './Routing/Routing';

const App = () => {
  return (
    <>
    
      <div class="header"><Header /></div>
      <div style={{ display: 'flex' }}>
        {/* <div className='main-body'> */}
        <div className="sideBar"><SideBar /></div>
        <div className='main-content'>
          <div><Rout /></div>
          <div class="footer"><Footer /></div>
        </div>
      {/* </div> */}
      </div>
      
    </>
  );
};

export default App;
