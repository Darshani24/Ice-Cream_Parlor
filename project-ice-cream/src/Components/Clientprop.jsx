import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const Clientprop = (props) => {
  return (
    <div className='w-[250px]  p-6 bg-white rounded-[6px]'>
            <div className=' h-[190px] '>
            
               
                <div className=' flex flex-row items-start'>
                   <img src={props.image} alt="" className='w-[55px]  rounded-full ' />
             <div className='ml-3'>
              <span className='text-sm text-end'>{props.Name} </span> 
               <div className='text-red-600 h-[10px] w-[10px]'>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-fill'></i>
                <i className='ri-star-line'></i>
                <i className='ri-star-line '></i>
              </div>
                
             </div>
             </div>
            <p className='pt-3.5 text-start text-[10px]'>{props.Review}</p>  
            </div>
            
          </div>
  )
}

export default Clientprop