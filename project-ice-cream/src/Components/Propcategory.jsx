import React from 'react'
import { SwiperSlide } from 'swiper/react'

const Propcategory = (props) => {
  return (
    <SwiperSlide>
      <div className='flex flex-col items-center justify-center text-center gap-2 '>
        <div className='w-[240px] h-[240px] md:w-[270px] md:h-[270px] flex justify-center'>
          <img
            src={props.image}
            alt="Slide-Image"
            className=' rounded-full object-fill p-[20px]'
          />
        </div>
        <span className='font-bold p-2 text-[15px]'>{props.name}</span>
        <span className='text-center w-full text-base hidden group-hover:inline-block'>{props.product}</span>
      </div>
    </SwiperSlide>
  )
}

export default Propcategory