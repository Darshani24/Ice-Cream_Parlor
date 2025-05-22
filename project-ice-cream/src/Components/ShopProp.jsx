import React from 'react'

const ShopProp = (props) => {
  return (
    <div> <div className='w-full flex flex-col gap-[10px] relative card'>
          <div className=' w-full'>
            <img src={props.image} alt="Slide-image" className='responsive-pop' />
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
                <i className='ri-star-line'></i>
                <i className='ri-star-line'></i>
                <i className='ri-star-line'></i>
              </div>
              <h2 className='header-styl'>{props.IceName}</h2>
              <span>{props.price}</span>
            </div>
       </div></div>
  )
}

export default ShopProp