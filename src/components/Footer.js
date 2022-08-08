import React from 'react';
import "./Footer.css";
import LOGO from "../Assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <img src={LOGO} className="logo" alt="logo" />
        </div>
        <div className='footer-line'></div>
        <div className='footer-content-label'>
          <div>
            <p>Home</p>
            <p>Features</p>
            <p>Projects</p>
          </div>
          <div>
            <p>About Us</p>
            <p>Clients & Feedback</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className='footer-policies' >
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Cookies Policy</span>
        <span>Copyrights</span>
      </div>
    </div>
  )
}

export default Footer