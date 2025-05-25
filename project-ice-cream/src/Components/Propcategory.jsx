import React from 'react'
import { SwiperSlide } from 'swiper/react'

const Propcategory = (props) => {
  return (
    <SwiperSlide>
      <div className='flex flex-col items-center justify-center text-center gap-2'>
        <div className='w-full flex justify-center'>
          <img
            src={props.image}
            alt="Slide-Image"
            className='w-[200px] h-[200px] rounded-full object-cover'
          />
        </div>
        <span className='slide-text'>{props.name}</span>
        <span className='text-center w-full text-base hidden group-hover:inline-block text-yellow-500'>{props.product}</span>
      </div>
    </SwiperSlide>
  )
}

export default Propcategory