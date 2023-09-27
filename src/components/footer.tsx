import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = (new Date()).getFullYear();
  return (
    <footer className='footer' id='footer'>
      <div className='footer-bottom'>
        <a href='/en' rel='home' className='logo'>
          <Image src='/images/logo-dia.svg' alt='SKA Observatory' width='70' height='19' />
        </a>
        <span className='copyright'>&nbsp;© {currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;