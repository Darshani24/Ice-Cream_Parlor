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
import Hero from '../../Components/Hero';




function Index() {
  return (
    <>
    <Hero/>
<section id='category'>

  <h3 className='category-section'>Shop Buy Now</h3>

  <Swiper 
  className='w-full px-2 '
  slidesPerView={5}
  spaceBetween={0}
  autoplay={{ delay: 1500 }}
  loop={true}
  modules={[Autoplay]}
  breakpoints={{
    0: { slidesPerView: 1.5 },
    768: { slidesPerView: 2.5 }, 
    1024: { slidesPerView: 4.5 }, 
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
             <span className='text-center w-full text-base hidden group-hover:inline-block text-yellow-500'>12 Products</span>
       </div>
   </SwiperSlide>
 </Swiper>
</section>





    </>
   
  )
}

export default Index