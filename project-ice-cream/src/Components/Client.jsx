import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import test01 from './../assets/test01.jpg'
import test02 from './../assets/test02.jpg'
import test2 from './../assets/test2.jpg'
import test1 from './../assets/test1.jpg'
import Clientprop from './Clientprop';

const Client = () => {
  return (
     <div className='bg-clientbg py-10 p-[30px] md:p-[45px] lg:p-[60px]'>
     <h3 className='category-section mt-2'>Happy Clients!</h3>

  <Swiper
    className='w-full '
    slidesPerView={3}
    spaceBetween={16}
    autoplay={{ delay: 1500 }}
    loop={true}
    modules={[Autoplay]}
    breakpoints={{
      640: { slidesPerView: 1.8 },
      768: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
    }}
  >
    <SwiperSlide>
      <Clientprop image={test01} Name="Chenuli"  Review="I ordered a variety pack and every flavor was delicious rich, creamy, and clearly made with quality ingredients. The ice cream arrived frozen and well-packed. Great service, fast delivery, and truly a treat I’ll keep coming back for!"/>
    </SwiperSlide>

      <SwiperSlide>
         <Clientprop image={test02} Name="Thivenya"  Review="The whole process was simple from start to finish. The website is user-friendly, and the ice cream arrived in perfect condition. I loved the caramel and mango flavors so refreshing! Definitely one of the best dessert experiences I’ve had online."/>
    </SwiperSlide>

    <SwiperSlide>
       <Clientprop image={test2} Name="Thenuli"  Review="We order every weekend now it’s become our family tradition. The kids love the fun flavors, and the quality is better than any store-bought brand. The packaging is eco-friendly too, which we really appreciate. Highly recommended!"/>
    </SwiperSlide>

      <SwiperSlide>
        <Clientprop image={test1} Name="Menuli"  Review="I didn’t expect online ice cream to taste this fresh and premium. Every scoop was smooth and flavorful. The unique options like pistachio and dark chocolate were amazing. It’s a great way to enjoy gourmet dessert at home."/>
    </SwiperSlide>
  </Swiper>
  </div>
  )
}

export default Client