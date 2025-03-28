import React from "react";
import "./Footer.css"; // Import CSS for styling
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo & Tagline */}
        <div className="footer-logo">
          <h2>Serenity Yoga</h2>
          <p>Find Your Inner Peace 🧘‍♂️✨</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            {/* <li><a href="#home">🏠 Home</a></li> */}
            <li>
              <a href="#about">📖 About Us</a>
            </li>
            <li>
              <a href="#classes">🧘 Classes</a>
            </li>
            <li>
              <a href="#contact">📩 Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Kolkata Yoga city </p>
          <p>📞 12345</p>
          <p>✉️ serenityyoga@.com</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘 Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸 Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦 Twitter
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Serenity Yoga. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
