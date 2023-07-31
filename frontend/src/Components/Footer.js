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
        <p>Address: 12345 Example Street, City</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: example@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
