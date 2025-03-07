import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Me</h3>
          <p>Email: hnavin2132002@gmail.com</p>
          <p>Phone: 7909014357</p>
          <p>Address: Kolkata (India)</p>
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <p>Instagram | Twitter | LinkedIn</p>
        </div>
      </div>
      <p>&copy; 2025 Your Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
