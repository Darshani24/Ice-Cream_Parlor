import React from 'react'
import {SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


function Popswiperslide(props) {
  return (
    <div>
        
         <SwiperSlide>
     <div className='w-full flex flex-col items-center justify-center gap-[20px] relative card'>
            <div className=' '>
              <img src={props.image} alt="Sell-Image 01"  className='w-[230px] h-[300px] md:w-[255px] lg:w-[300px] md:h-[350px] object-cover rounded-[10px] shadow-2xl shadow-gray-500'/>
              <div className='absolute top-5 flex flex-col  gap-2 right-5 hidden icons-card'>
                <i className='ri-heart-line icon-card'></i>
                <i className='ri-shuffle-line icon-card'></i>
                <i className='ri-eye-line icon-card'></i>
             </div>
             </div>
    
             <div className=' flex flex-col items-center gap-2'>
              <div className='star-styl'>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-line'></i>
              </div>
              <h2 className='font-bold'>{props.IceName}</h2>
              <span className='font-semibold text-[#3E2C2C] hover:text-[#ce6778]'>{props.price}</span>
             </div>
          </div>
  </SwiperSlide>
   
   
    </div>
  )
}

export default Popswiperslide