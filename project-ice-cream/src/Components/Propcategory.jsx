import React from 'react'

const Propcategory = (props) => {
  return (
    <div className='w-full card group'>
              <img src={props.image} alt="Slide-Image 01"  className='w-[200px] h-[200px] rounded-full'/>
                <span className='slide-text'>{props.name}</span>
                <span className='text-center w-full text-base hidden group-hover:inline-block text-yellow-500'>{props.product}</span>
          </div>
  )
}

export default Propcategory