import React from 'react';

// Import images properly for Vite
import Pink2 from '../assets/pnk2.jpg';
import Pink1 from '../assets/pnk1.jpg';

const Banner = () => {
  const banners = [
    {
      bg: Pink2,
      title: 'Save 25% Off',
      subtitle: '2025',
      description: 'Fresh, creamy, and full of flavor a scoop of pure joy in every bite.',
      button: 'Flavor Pick'
    },
    {
      bg: Pink1,
      title: 'Best Selling!',
      subtitle: '2025',
      description: 'Our most loved flavors rich, creamy, and simply unforgettable.',
      button: 'Try Now'
    }
  ];

  return (
    <div className="bg-yellow-50 flex flex-wrap md:flex-nowrap gap-[30px] md:gap-[95px] lg:gap-[135px] justify-center p-[50px] md:p-[75px] lg:p-[95px] text-center md:text-left">
      {banners.map((item, index) => (
        <div
          key={index}
          className="selstyle w-full sm:w-[105px] shadow-2xl shadow-gray-400 md:w-[350px] h-[350px] lg:h-[475px] bg-cover bg-center rounded-[5px] p-[50px] flex flex-col justify-between items-center text-black"
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          <div className='gap-[10px] lg:gap-[30px] flex flex-col items-center'>
            <div className='text-center'>
            <small className="font-bold text-xl">{item.title}</small>
            <h3 className="text-lg my-2 ">{item.subtitle}</h3>
            <p className="mb-10">{item.description}</p>
          </div>
          <div>
             <button className="min-btn">{item.button} <i className="ri-arrow-right-line" /></button>
          </div>
          </div>
          
         
        </div>
      ))}
    </div>
  );
};

export default Banner;
