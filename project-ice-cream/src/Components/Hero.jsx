import React from 'react'
import CoverImage from './../assets/CoverImage.png'
import Nav from './Nav'

const Hero = () => {
  return (
   <div className=''>
<Nav/>

<div className='w-full sm:w-auto px-[20px] flex gap-[30px] flex-col md:flex-row'>

<div className='flex items-center justify-center flex-col gap-4'>
  <h1 className='text-4xl md:text-5xl lg:text-6xl  title font-bold text-[#3E2C2C]'>Frozen Delight!</h1>
   <p className='subtitle text-lg text-[#7D7D7D] text-center md:max-w-[450px] lg:max-w-[550px] max-w-[650px]'>Indulge in our handcrafted ice creams made with love, fresh ingredients, and flavors that’ll melt your heart.</p>
   <button className='text-[16px] bg-green-950 px-4 py-2.5  rounded-[5px] hover:bg-[#c1f7e6] text-white hover:text-gray-800'>Explore Flavors <i className='ri-arrow-right-line'></i></button>

</div>
<div className='flex items-center justify-center'>
<img src={CoverImage} alt="header-image" className='mt-3.5 w-[250px] h-[250px] md:w-auto md:h-auto'/>

</div>

</div>
</div>
  )
}

export default Hero