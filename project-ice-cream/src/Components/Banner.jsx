import React from 'react'

const Banner = () => {
  return (
    <div className='bg-categorybg flex pt-2 gap-[25px] flex-wrap md:flex-nowrap text-center md:text-start p-[30px] md:p-[45px] lg:p-[60px]  '>
    
    <div className='selstyle w-[750px] sm:w-[175px] md:w-[650px] h-[550px] bg-[url(assets/pnk2.jpg)] bg-cover rounded-[5px] p-[100px] text-center ' >
     <div className=''>
     <small className='text-black font-bold text-3xl'>Save 25% Off</small>
      <h3 className=''>2025</h3>
      <p className='mb-20 text-black'>Fresh, creamy, and full of flavor a scoop of pure joy in every bite</p>
     </div>
      <button className='min-btn'>Flavor Pick<i className='ri-arrow-right-line'></i></button>
    </div>



    <div className='selstyle w-[750px] sm:w-[175px] md:w-[650px] h-[550px] bg-[url(assets/grn2.jpg)] bg-cover rounded-[5px] p-[100px] text-center   '>
    <div className=''>
    <small className='text-black font-bold text-3xl'>Save 25% Off!!</small>
      <h3>2025</h3>
      <p className='mb-20 text-black'>Fresh, creamy, and full of flavor a scoop of pure joy in every bite</p>
    </div>
      <button className='min-btn'>Flavor Pick<i className='ri-arrow-right-line'></i></button>
    </div>


    <div className='selstyle w-[750px] sm:w-[175px] md:w-[650px] h-[550px] bg-[url(assets/pnk1.jpg)] bg-cover rounded-[5px] p-[100px] text-center '>
    <div className=''>
    <small className='text-black font-bold text-3xl'>Best Selling!</small>
      <h3>2025</h3>
      <p className='mb-20 text-black'>Our most-loved flavors rich, creamy, and simply unforgettable.</p>
    </div>
      <button className='min-btn'>Try Now<i className='ri-arrow-right-line'></i></button>
    </div>
  </div>
  )
}

export default Banner