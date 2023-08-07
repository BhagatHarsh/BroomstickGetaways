import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={require("../Images/Logo.jpg")} alt="Logo" />
      </div>
      <div className="footer-contact">
        <h3>Contact Details</h3>
        <p>Address: 123 Diagon Alley, London</p>
        <p>Phone: +44 123-456-7890</p>
        <p>Email: info@hogwarts.com</p>
      </div>
    </footer>
  );
};

export default Footer;