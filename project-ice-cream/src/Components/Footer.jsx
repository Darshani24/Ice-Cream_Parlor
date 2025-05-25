import React from 'react'

const Footer = () => {
  return (
   <div className='bg-black text-white flex flex-col gap-5 p-[50px] md:p-[65px] lg:p-[85px]'> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 pb-9 '>
    <div className='flex flex-col gap-3'>
      <span className='text-2xl font-bold text-green-700 cursor-pointer'>Ice Cream Parlor</span>
      <div className='flex flex-col mt-4'>
      <span className='text-lg'>Follow Us</span> 
      <p className='pt-3 text-gray-600 hover:text-white text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid asperiores veritatis in illum a ut neque vel eligendi dolorem! Quibusdam fugit animi quisquam repellendus, magnam amet magni at minima!</p> 
      <div className='flex gap-4 mt-5'>
        <i className='ri-facebook-line text-gray-700 hover:text-white cursor-pointer text-2xl'></i>
        <i className='ri-twitter-x-line text-gray-700 hover:text-white cursor-pointer text-2xl'></i>
        <i className='ri-youtube-line text-gray-700 hover:text-white cursor-pointer text-2xl'></i>
         <i className='ri-youtube-line text-gray-700 hover:text-white cursor-pointer text-2xl'></i>
        <i className='ri-instagram-line text-gray-700 hover:text-white cursor-pointer text-2xl'></i>
      </div>
      </div>
    </div>
     <div className='flex flex-col mt-14'>
      <h2 className='text-lg'>Usefull Links</h2>
      <p className='text-gray-700 hover:text-white pt-3 cursor-pointer'>About</p>
      <p className='text-gray-700 hover:text-white cursor-pointer'>Services</p>
      <p className='text-gray-700 hover:text-white cursor-pointer'>Storage</p>
      <p className='text-gray-700 hover:text-white cursor-pointer'>Blog</p>
      <p className='text-gray-700 hover:text-white cursor-pointer'>Shop</p>
      <p className='text-gray-700 hover:text-white cursor-pointer'>Spe. Menu</p>
     </div>
     <div className='flex flex-col mt-14'>
      <h2 className='text-lg'>Find Store</h2>

      <p className='pt-3 text-gray-600 hover:text-white text-[14px]'>No-4958, Creamy House,Embilipitiya Road,Sooriyawewa.</p>
      <p className='pt-3 text-gray-600 hover:text-white text-[14px]'>No-25/3, Ice Parlor,New Town,Embilipitiya.</p>
      <h2 className='pt-5 text-lg'>Call Now</h2>
      <p className='pt-3 text-gray-600 hover:text-white text-[14px] cursor-pointer'>+94 71 459 2077</p>
      <p className='pt-3 text-gray-600 hover:text-white text-[14px] cursor-pointer'>+94 47 723 4487</p>
       <p className='pt-3 text-gray-600 hover:text-white text-[14px] cursor-pointer'>support@icecreamparlor.com</p>
     </div>
     <div className='flex flex-col mt-14'>
      <h2 className='text-lg'>Opening Hours</h2>
      <p className='pt-3 text-gray-600 hover:text-white text-[14px]'>Monday-Sunday</p>
      <p className='pt-3 text-gray-600 hover:text-white text-[14px]'>9:00 am to 9:00 pm</p>
      </div>
  </div>
  <p className='text-center pt-8 border-t-1 border-gray-500 '>@2025 Ice Cream Parlor  .  All Rights Reserved</p>
  </div>
  )
}

export default Footer