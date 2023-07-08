import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarElements.css';

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="Bars" />
      <div className="NavMenu">
        <Link className="NavLink" to="/about">
          About
        </Link>
        <Link className="NavLink" to="/events">
          Events
        </Link>
        <Link className="NavLink" to="/annual">
          Annual Report
        </Link>
        <Link className="NavLink" to="/team">
          Teams
        </Link>
        <Link className="NavLink" to="/blogs">
          Blogs
        </Link>
        <Link className="NavLink" to="/sign-up">
          Sign Up
        </Link>
      </div>
      <div className="NavBtn">
        <Link className="NavBtnLink" to="/signin">
          Sign In
        </Link>
      </div>
    </div>    
  );
};

export default Navbar;