import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#who-we-are">Who We Are</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#membership">Membership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="join-btn">Join Now</button>
      </nav>
    </header>
  );
};

export default Header;
