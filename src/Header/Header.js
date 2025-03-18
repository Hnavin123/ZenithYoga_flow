import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="home">Home</Link></li>
          <li><a href="about">Who We Are</a></li>
          <li><a href="classes">Classes</a></li>
          <li><a href="membership">Membership</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <button className="join-btn">Join Now</button>
      </nav>
    </header>
  );
};

export default Header;
