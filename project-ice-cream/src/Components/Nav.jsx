import React, { useRef } from 'react';
import Header from './Header';

function Nav() {
  const menu = useRef();

  const menuhandler = () => {
    menu.current.classList.toggle('show-menu');
   
  };

  return (
    <div className='flex items-center justify-between px-6 py-6 relative'>
      
      <div className='mr-4'>
        <span className='text-xl text-green-950 font-bold cursor-pointer'>ICEPARLOR</span>
      </div>

     
      <div
        ref={menu}
        className='Nav-Link absolute top-[100%] left-[-100%]
        md:static  md:flex  gap-y-4 md:gap-x-10 items-center md:flex-row flex-col
          lg:bg-transparent md:w-auto w-[200px] p-4 md:p-0 bg-green-200 sm:bg-none'
      >
        <Header name="Home" url="#Home" />
        <Header name="Category" url="#Category" />
        <Header name="Popular" url="#Popular" />
        <Header name="Shop" url="#Shop" />
        <Header name="Testimonials" url="#Testimonials" />
        <Header name="Contact" url="#Contact" />
      </div>

    
      <div className='flex items-center space-x-4'>
        <button className='btn'>Contact Us</button>
        <i className='ri-menu-3-line icon-btn md:hidden' onClick={menuhandler}></i>
      </div>
    </div>
  );
}

export default Nav;
