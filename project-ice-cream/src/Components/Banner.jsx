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
      description: 'Fresh, creamy, and full of flavor — a scoop of pure joy in every bite.',
      button: 'Flavor Pick'
    },
    {
      bg: Pink1,
      title: 'Best Selling!',
      subtitle: '2025',
      description: 'Our most-loved flavors — rich, creamy, and simply unforgettable.',
      button: 'Try Now'
    }
  ];

  return (
    <div className="bg-categorybg flex flex-wrap md:flex-nowrap gap-6 justify-center p-6 md:p-10 lg:p-14 text-center md:text-left">
      {banners.map((item, index) => (
        <div
          key={index}
          className="selstyle w-full sm:w-[175px] md:w-[350px] h-[550px] bg-cover bg-center rounded-[5px] p-[50px] flex flex-col justify-between items-center text-black"
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          <div>
            <small className="font-bold text-3xl">{item.title}</small>
            <h3 className="text-xl my-2">{item.subtitle}</h3>
            <p className="mb-20">{item.description}</p>
          </div>
          <button className="min-btn">{item.button} <i className="ri-arrow-right-line" /></button>
        </div>
      ))}
    </div>
  );
};

export default Banner;
