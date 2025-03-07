import React from 'react';
import NavBar from './NavBar/Navbar';
import SideBar from './SideBar/SideBar';
import Description from './Description/Description';
import Project from './Project/Project';
import { Footer } from './Footer/Footer';
function App() {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ marginLeft: '250px', padding: '20px', width: 'calc(100% - 250px)' }}>
          <Description />
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
