import React from 'react'
import '../../../../styles/corouselslider.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import FirstCarouselSlider from './FirstCarouselSlider'
import SecondCarouselSlider from './SecondCarouselSlider'
import ThirdCarouselSlider from './ThirdCarouselSlider'



const Corouselslider = () => {
  
  return (
    <div >
      <span className='project'>Project in progress:</span>
        <Carousel thumbWidth={false} showIndicators={false}>
          <div>
          <FirstCarouselSlider/>
          </div>
          <div>
            <SecondCarouselSlider/>
          </div>
          <div>
            <ThirdCarouselSlider/>
          </div>
      
        </Carousel>
    
    </div>
  )
}

export default Corouselslider