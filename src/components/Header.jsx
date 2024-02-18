import React from 'react';
import '../index.css';
import Logo from '../images/Logo.svg';

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
        <img src={Logo} alt="Logo Image" />
        </div>
        <ul className="nav-bar">
            <li className="home-link">Home</li>
            <li>About Us</li>
            <li>Artists</li>
            <li>Events</li>
            <li>Contact Us</li>
        </ul>
    </div>
  );
}

export default Header;
