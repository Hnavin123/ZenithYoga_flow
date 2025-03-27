import React from 'react';
import './SideBar.css';
import { Link } from 'react-router';

const SideBar = () => {
  return (
    <aside className="sideBar">
      <div  className='sideBar-content'> 
        <Link to="testimonials">Our Testimonials</Link>
        <Link to="offers">Offers</Link>
        <Link to="features">Features</Link>
        <Link to="equipments">Equipments</Link>
        <Link to="trainers">Trainers</Link>
        <Link to="expertdietcians">Meet Expert Dieticians</Link>
        <Link to="challenges">90 Days Challenges</Link>
      </div>
    </aside>
  );
};

export default SideBar;
