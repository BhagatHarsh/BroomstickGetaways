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
      <div className="footer-harry-potter-details">
        <h3>Harry Potter Details</h3>
        <p>Platform 9¾, King's Cross Station</p>
        <p>House Points: Gryffindor - 150, Slytherin - 120, Hufflepuff - 90, Ravenclaw - 100</p>
        <p>Quidditch Cup Winners: Gryffindor - 5, Slytherin - 3, Hufflepuff - 2, Ravenclaw - 4</p>
      </div>
    </footer>
  );
};

export default Footer;