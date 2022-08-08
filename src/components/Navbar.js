import React from 'react';
import "./Navbar.css";
import LOGO from "../Assets/TVAST logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="nav-items">
        <h3>Home</h3>
        <h3>Projects</h3>
        <h3>Features</h3>
        <h3>About Us</h3>
        <button className='btn'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar