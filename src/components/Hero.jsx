import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2100,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    pauseOnFocus: true
  };

  return (

    <div>
      <Slider {...settings}>
        <div className=''>
          <img src="https://www.origastock.com/images/shopping/download/32.jpg" className='w-full h-[700px]' alt="slider" />
        </div>
        <div>
          <img src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg" className='w-full h-[700px]' alt="slider" />
        </div>
        <div>
          <img src="https://www.donnapop.it/wp-content/uploads/2019/04/shutterstock_1038849250.jpg" className='w-full h-[700px]' alt="slider" />
        </div>
      </Slider>
    </div>
  )
}
