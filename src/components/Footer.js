import React from 'react';

const Footer = () => {
  return (
    <footer className='h-20 flex flex-col justify-center items-center bg-gray-950 text-center md:flex-row'>
      <h5 className='text-white m-1 font-medium leading-5'>
        &copy; {new Date().getFullYear()}
        <span className='text-amber-700'> ComfySloth</span>
      </h5>
      <h5 className='text-white m-1 font-medium leading-5'>
        All rights reserved
      </h5>
    </footer>
  );
};

export default Footer;
