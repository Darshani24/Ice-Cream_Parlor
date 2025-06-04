import React from 'react'

const ShopProp = (props) => {
  return (
    <div> <div className='w-full flex flex-col items-center justify-center gap-[20px] relative card'>
          <div className=''>
            <img src={props.image} alt="Slide-image" className='shadow-2xl shadow-gray-400 w-[250px] h-[300px] md:w-[275px] lg:w-[300px] md:h-[350px] rounded-[10px] ' />
            <div className='absolute top-5 flex flex-col  gap-[25px] right-5 hidden icons-card'>
              <i className='ri-heart-line icon-card'></i>
              <i className='ri-shuffle-line icon-card'></i>
              <i className='ri-eye-line icon-card'></i>
            </div>
          </div>
    
          <div className=' flex flex-col items-center gap-2'>
              <div className='star-styl'>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-line'></i>
                <i className='ri-star-line'></i>
                <i className='ri-star-line'></i>
              </div>
              <h2 className='header-styl font-bold'>{props.IceName}</h2>
              <span className='font-semibold text-[#3E2C2C] hover:text-[#ce6778] '>{props.price}</span>
            </div>
       </div></div>
  )
}

export default ShopProp