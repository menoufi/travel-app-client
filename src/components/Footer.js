import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer-icon text-center mt-4">
      <Link to="/">
        <img src={homeIcon} alt="Home" />
      </Link>
    </div>
  );
}

export default Footer;
