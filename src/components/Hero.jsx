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
          <img src="https://images3.alphacoders.com/105/thumb-1920-1050380.jpg" className='w-full h-[700px]' alt="slider" />
        </div>
        <div>
          <img src="https://images8.alphacoders.com/106/1062942.jpg" className='w-full h-[700px]' alt="slider" />
        </div>
        <div>
          <img src="https://images.alphacoders.com/815/thumb-1920-815053.jpg" className='w-full h-[700px]' alt="slider" />
        </div>
      </Slider>
    </div>
  )
}
