import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-holder'>
      <img className='nav-logo' src={logo} alt='' />
      {/* Navbar */}
      <nav className='main-nav'>
        <h3 className='main-nav-header'>COLOR-EXTRACTOR</h3>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/extractor'>Color Extractor</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
