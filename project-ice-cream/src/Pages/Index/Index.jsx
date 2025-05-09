import React from 'react'
import Nav from '../../Components/Nav'
import CoverImage from './../../assets/CoverImage.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import SlideImage1 from './../../assets/SlideImage1.jpg'
import SlideImage2 from './../../assets/SlideImage2.jpg'
import SlideImage3 from './../../assets/SlideImage3.jpg'
import SlideImage4 from './../../assets/SlideImage4.jpg'
import SlideImage5 from './../../assets/SlideImage5.jpg'
import SlideImage6 from './../../assets/SlideImage6.jpg'
import SlideImage7 from './../../assets/SlideImage7.jpg'
import SlideImage8 from './../../assets/SlideImage8.jpg'




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
<section id='category'>

  <h3 className='category-section'>Shop Buy Now</h3>

  <Swiper 
    className='w-full px-2 '
    slidesPerView={5}
    spaceBetween={20}
    autoplay={{ delay: 1500 }}
    loop={true}
    modules={[Autoplay]}
    breakpoints={{
      0: { slidesPerView: 1.5 },
      768: { slidesPerView: 2.5 }, 
      1024: { slidesPerView: 5.5 }, 
    }}
    >
   <SwiperSlide>
       <div className='w-full card group'>
           <img src={SlideImage1} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
             <span className='slide-text'>Strawberry Ice Cream</span>
             <span className='text-center w-full text-base hidden group-hover:inline-block text-red-700'>2 Products</span>
       </div>
   </SwiperSlide>

   <SwiperSlide>
       <div className='w-full card group'>
           <img src={SlideImage2} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
             <span className='slide-text'>Popsical Ice Cream</span>
             <span className='text-center w-full text-base hidden group-hover:inline-block text-red-700'>12 Products</span>
       </div>
   </SwiperSlide>

   <SwiperSlide>
       <div className='w-full card group'>
           <img src={SlideImage3} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
             <span className='slide-text'>Chocolate Fruits Ice Cream</span>
             <span className='text-center w-full text-base hidden group-hover:inline-block text-red-700'>3 Products</span>
       </div>
   </SwiperSlide>

   <SwiperSlide>
       <div className='w-full card group'>
           <img src={SlideImage4} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
             <span className='slide-text'>Strawberry Ice Corn</span>
             <span className='text-center w-full text-base hidden group-hover:inline-block text-red-700'>2 Products</span>
       </div>
   </SwiperSlide>

   <SwiperSlide>
       <div className='w-full card group'>
           <img src={SlideImage5} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
             <span className='slide-text '>Honey with Vanila Ice Cream</span>
             <span className='text-center w-full text-base hidden group-hover:inline-block text-red-700'>5 Products</span>
       </div>
   </SwiperSlide>

   
   <SwiperSlide>
       <div className='w-full card group'>
           <img src={SlideImage8} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
             <span className='slide-text'>Mint Chocolate Ice Cream</span>
             <span className='text-center w-full text-base hidden group-hover:inline-block text-red-700'>2 Products</span>
       </div>
   </SwiperSlide>

   <SwiperSlide>
       <div className='w-full card group'>
           <img src={SlideImage6} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
             <span className='slide-text '>Orange Ice-Cream</span>
             <span className='text-center w-full text-base hidden group-hover:inline-block text-red-700'>5 Products</span>
       </div>
   </SwiperSlide>

   <SwiperSlide>
       <div className='w-full card group'>
           <img src={SlideImage7} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
             <span className='slide-text '>Rum & Raising Ice Cream</span>
             <span className='text-center w-full text-base hidden group-hover:inline-block text-red-700'>5 Products</span>
       </div>
   </SwiperSlide>

 </Swiper>
</section>



    </>
   
  )
}

export default Index