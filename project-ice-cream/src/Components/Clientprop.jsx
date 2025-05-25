import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const Clientprop = (props) => {
  return (
    <div className='w-full card group p-4 bg-white'>
            <div className='client-styl'>
              <img src={props.image} alt="" className='w-[75px] rounded-full mb-4 ' />   
                <div className=' flex flex-col items-center'>
              <div className='text-red-600'>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-line'></i>
                <i className='ri-star-line'></i>
              </div>
              <span className='text-sm text-center'>{props.Name} </span>
            </div>   
            </div>
            <p className='pt-2 md:pt-0  text-start'>{props.Review}</p>
          </div>
  )
}

export default Clientprop