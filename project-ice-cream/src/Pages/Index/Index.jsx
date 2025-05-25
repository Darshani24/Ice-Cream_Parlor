import React from 'react'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hero from '../../Components/Hero';
import Category from '../../Components/Category';
import Banner from '../../Components/Banner';
import Popular from '../../Components/Popular';
import Shop from '../../Components/Shop';
import Achieve from '../../Components/Achieve';
import Client from '../../Components/Client';
import Footer from '../../Components/Footer';




function Index() {
  return (
    <div>
   <Hero/>
   <Category/>
   <Banner/>
   <Popular/>
   <Shop/>
   <Achieve/>
   <Client/>
   <Footer/>

    </div>
   
  )
}

export default Index