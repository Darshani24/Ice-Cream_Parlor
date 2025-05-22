import React from 'react'
import yello3 from './../assets/yello3.jpg'
import yello2 from './../assets/yello2.jpg';
import grn5 from './../assets/grn5.jpg';
import yello4 from './../assets/yello4.jpg';
import grn4 from './../assets/grn4.jpg';
import grn3 from './../assets/grn3.jpg';
import grn1 from './../assets/grn1.jpg';
import yello5 from './../assets/yello5.jpg';
import sellimage1 from './../assets/sellimage1.jpg';
import SlideImage6 from './../assets/SlideImage6.jpg';
import grn2 from './../assets/grn2.jpg';
import SlideImage4 from './../assets/SlideImage4.jpg';
import ShopProp from './ShopProp';


const Shop = () => {
  return (
    <div className='bg-shopbg p-[30px] md:p-[45px] lg:p-[60px] '> 
    <h3 className='category-section '>Enjoy with Ice Cream,Release Your Stress!</h3>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
   <ShopProp IceName="Strowberry" price="300" image={yello3}/>
   <ShopProp IceName="Vanila" price="250" image={yello2}/>
   <ShopProp IceName="Chocolate with Mint" price="320" image={grn5}/>
   <ShopProp IceName="Vanila withy Chocolate" price="275" image={yello4}/>
   <ShopProp IceName="Strowberry with Vanila" price="200" image={grn4}/>
   <ShopProp IceName="Popsical Orange" price="150" image={grn3}/>
   <ShopProp IceName="Coconut Popsical" price="275" image={grn1}/>
   <ShopProp IceName="Wtermelon" price="180" image={yello5}/>
   <ShopProp IceName="BlueBerry" price="330"image={sellimage1} />
   <ShopProp IceName="Strowberry" price="200"image={SlideImage6}/>
   <ShopProp IceName="Mango popsical" price="160"image={grn2}/>
   <ShopProp IceName="Chocholote popsical" price="260"image={SlideImage4}/>
   
  </div>
  </div>
  )
}

export default Shop