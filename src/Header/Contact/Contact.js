import React from "react";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>📞 Contact Us</h2>
      <p>Have questions or need assistance? Get in touch with us!</p>

      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message:</label>
        <textarea
          rows="4"
          placeholder="Write your message here..."
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📍 Address: 123 Yoga Street, Wellness City</p>
        <p>📧 Email: support@yogawellness.com</p>
        <p>📞 Phone: +123-456-7890</p>
      </div>
    </div>
  );
};

export default Contact;
