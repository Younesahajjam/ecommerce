import React from 'react'
import {homeCarouselData} from './MainCroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';





const MainCrosel = () => {
  
    const items = homeCarouselData.map((item)=> <img className='cursor-pointer -z-10'
role='presentation' src={item.Image} style={{width: "100%", height: "auto"}} alt=""/>)
  return (  <AliceCarousel
       items={items}
     disableButtonsControls
     autoPlay
     autoPlayInterval={1000}
     infinite
    />
)
  }
export default MainCrosel;