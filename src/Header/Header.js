import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
const navigate = useNavigate();

const addmissionHandler = () => {
  console.log("Form openiing");
  setTimeout(() => {
    navigate('/admission-form');
  },1000)
}

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">Who we are</Link></li>
          <li><Link to="classes">Classes</Link></li>
          <li><Link to="membership">Membership</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
        <button className="join-btn" onClick={addmissionHandler}>Join Now</button>
      </nav>
    </header>
  );
};

export default Header;
