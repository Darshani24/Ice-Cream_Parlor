import React from 'react'
import {SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


function Popswiperslide(props) {
  return (
    <div>
        
         <SwiperSlide>
     <div className='relative flex flex-col gap-[10px] card '>
            <div className='w-full '>
              <img src={props.image} alt="Sell-Image 01"  className='w-full h-[300px] object-cover rounded-[10px]'/>
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
              <h2 className='header-styl'>{props.IceName}</h2>
              <span>{props.price}</span>
             </div>
          </div>
  </SwiperSlide>
   
   
    </div>
  )
}

export default Popswiperslide