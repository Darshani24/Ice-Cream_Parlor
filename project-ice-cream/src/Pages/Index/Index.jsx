import React from 'react'
import Nav from '../../Components/Nav'
import CoverImage from './../../assets/CoverImage.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';





function Index() {
  return (
    <>
    <div className='bg-[#FFF9F3]'>

<Nav/>

<div className='w-full sm:w-auto px-[20px] pt-[8px] flex gap-[30px] flex-col md:flex-row'>

<div className='flex items-center justify-center flex-col gap-8  pt-[5px]'>
  <h1 className='text-4xl title font-bold text-[#3E2C2C]'>Frozen Delight!</h1>
   <p className='subtitle text-lg text-[#7D7D7D] text-center'>Indulge in our handcrafted ice creams made with love, fresh ingredients, and flavors that’ll melt your heart.</p>
   <button className='bg-[#A0E7D0] hover:bg-[#8dd4bf] text-[#1B0F03] px-2.5 py-2.5 text-xl md:text-lg rounded-[6px] md:px-2 md:py-2'>Flavor Pick <i className='ri-arrow-right-line'></i></button>

</div>
<div className='flex items-center justify-center'>
<img src={CoverImage} alt="header-image" className='mt-3.5 w-[250px] h-[250px] md:w-auto md:h-auto'/>

</div>

</div>
</div>



    </>
   
  )
}

export default Index