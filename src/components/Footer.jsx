import React from 'react';
import '../index.css';
import Logo from '../images/Logo.svg';
import Copyright from '../images/Copyright.svg';
import Email from '../images/Email.svg';
import Phone from '../images/Phone.svg';


const Footer = () => {
  return (
    <div className="footer">
      <div className="section-one">
          <div>
             <img src={Phone} alt="Phone Image" />
             <p>0734532976</p>
          </div>
          <div>
             <img src={Email} alt="Email Image" />
             <p>artists@gmail.com</p>
          </div>
          <p className="random-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </p>
      </div>
      <div className="section-two">
          <ul>
          <h4>Sitemap</h4>
            <li>Home</li>
            <li>About Us</li>
            <li>Artists</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
       </div>
       <div className="section-three">
        <div>
            <img src={Logo} alt="Logo Image" />
        </div>
        <div className="copyright-div">
            <p>Copyrights</p>
           <img src={Copyright} alt="Copyright Image" />
        </div>
       </div>
    </div>
  );
}

export default Footer;
