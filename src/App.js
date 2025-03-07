import React from 'react';
import NavBar from './NavBar/Navbar';
import SideBar from './SideBar/SideBar';
import Description from './Description/Description';
import Project from './Project/Project';
import { Footer } from './Footer/Footer';
function App() {
  return (
    <>
      <div class="header"><NavBar /></div>
      <div style={{ display: 'flex' }}>
        <div className='main-body'>
        <div className="menu"><SideBar /></div>
        <div className='main'>
          <Description />
        </div>
        </div>
      </div>
      <div class="footer"><Footer /></div>
      
    </>
  );
}

export default App;
