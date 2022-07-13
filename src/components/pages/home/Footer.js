import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      Made by -{' '}
      <Link to='https://github.com/H-KC' className='footer-logo'>
        HKC
      </Link>
    </footer>
  );
};

export default Footer;
