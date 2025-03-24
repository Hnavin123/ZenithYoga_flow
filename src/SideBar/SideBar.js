import React from 'react';
import './SideBar.css';

const SideBar = () => {
  return (
    <aside className="sideBar">
      <div  className='sideBar-content'> 
        <a href="testimonials">Our Testimonials</a>
        <a href="offers">Offers</a>
        <a href="features">Features</a>
        <a href="equipments">Equipments</a>
        <a href="trainers">Trainers</a>
        <a href="dieticians">Meet Expert Dieticians</a>
        <a href="challenges">90 Days Challenges</a>
      </div>
    </aside>
  );
};

export default SideBar;
