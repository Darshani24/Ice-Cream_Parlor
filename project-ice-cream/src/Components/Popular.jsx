import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import yello3 from './../assets/yello3.jpg'
import yello2 from './../assets/yello2.jpg';
import yello4 from './../assets/yello4.jpg';
import grn5 from './../assets/grn5.jpg';
import grn4 from './../assets/grn4.jpg';
import grn2 from './../assets/grn2.jpg';
import grn3 from './../assets/grn3.jpg';
import yello5 from './../assets/yello5.jpg';
import grn1 from './../assets/grn1.jpg';
import sellimage1 from './../assets/sellimage1.jpg';
import SlideImage6 from './../assets/SlideImage6.jpg';
import SlideImage4 from './../assets/SlideImage4.jpg';
import Popswiperslide from './Popswiperslide';

const Popular = () => {
  return (
   <div className='bg-popularbg p-[30px] md:p-[45px] lg:p-[60px]'> 
      <h3 className='category-section '>Popular Scoop Flavour</h3>
   
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
      
    <SwiperSlide><Popswiperslide IceName="Strowberry" price="300" image={yello3}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Vanila" price="250" image={yello2}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Chocolate with Mint" price="320" image={grn5}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Vanila withy Chocolate" price="275" image={yello4}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Strowberry with Vanila" price="200" image={grn4}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Popsical Orange" price="150" image={grn3}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Coconut Popsical" price="275" image={grn1}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Wtermelon" price="180" image={yello5}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="BlueBerry" price="330"image={sellimage1} /></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Strowberry" price="200"image={SlideImage6}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Mango popsical" price="160"image={grn2}/></SwiperSlide>
    <SwiperSlide><Popswiperslide IceName="Chocholote popsical" price="260"image={SlideImage4}/></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Popular