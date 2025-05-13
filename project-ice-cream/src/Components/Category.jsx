import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import SlideImage1 from './../assets/SlideImage1.jpg'
import SlideImage2 from './../assets/SlideImage2.jpg'
import SlideImage3 from './../assets/SlideImage3.jpg'
import SlideImage4 from './../assets/SlideImage4.jpg'
import SlideImage5 from './../assets/SlideImage5.jpg'
import SlideImage6 from './../assets/SlideImage5.jpg'
import SlideImage7 from './../assets/SlideImage7.jpg'
import SlideImage8 from './../assets/SlideImage8.jpg'
import sellimage1 from './../assets/sellimage1.jpg'
import Propcategory from './Propcategory';


const Category = () => {
  return (
   <div className='bg-categorybg'> <h3 className='category-section'>Shop Buy Now</h3>

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

    <Propcategory image={SlideImage1} name="Strawberry Ice Cream" product="2 Products"/>
      
   </SwiperSlide>

   <SwiperSlide>

     <Propcategory image={SlideImage2} name="WoodApple Popsical" product="5 Products"/>
      
   </SwiperSlide>

   <SwiperSlide>

      <Propcategory image={SlideImage3} name="Vanilla with Chocolate Ice Cream" product="3 Products"/>

   </SwiperSlide>

   <SwiperSlide>

     <Propcategory image={SlideImage4} name="Strowberry Ice Corn" product="3 Products"/>
      
   </SwiperSlide>

   <SwiperSlide>

     <Propcategory image={SlideImage5} name="Vanilla with Honey Ice Cream" product="2 Products"/>

   </SwiperSlide>

   
   <SwiperSlide>

     <Propcategory image={SlideImage6} name="Orange Ice Cream" product="4 Products"/>

   </SwiperSlide>

   <SwiperSlide>

     <Propcategory image={SlideImage7} name="Rum & Raising Ice Cream" product="6 Products"/>

   </SwiperSlide>

   <SwiperSlide>

     <Propcategory image={SlideImage8} name="Mint Chocolate Ice Cream" product="3 Products"/>

   </SwiperSlide>

   <SwiperSlide>

     <Propcategory image={sellimage1} name="Strowberry and Vanilla cup" product="5 Products"/>

   </SwiperSlide>

 </Swiper></div>

 
  )
}

export default Category