import React from 'react';
import Slider from 'react-slick';
import './../../../css/slick.css';
import './../../../css/slick-theme.css';

import img1 from './../../../assets/sliderIMG/1.jpeg'
import img2 from './../../../assets/sliderIMG/2.jpg'
import img3 from './../../../assets/sliderIMG/3.jpeg'
import img4 from './../../../assets/sliderIMG/4.jpeg'
import img5 from './../../../assets/sliderIMG/5.jpeg'
import img6 from './../../../assets/sliderIMG/6.jpeg'
import img7 from './../../../assets/sliderIMG/7.jpeg'
import img8 from './../../../assets/sliderIMG/8.jpeg'

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div className="mb-8">
      <Slider {...settings}>
        <div className="w-full">
          <img
            src={img1}
            alt="Slider 1"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src={img2}
            alt="Slider 2"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src={img3}
            alt="Slider 3"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src={img4}
            alt="Slider 4"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src={img5}
            alt="Slider 5"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src={img6}
            alt="Slider 6"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src={img7}
            alt="Slider 7"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src={img8}
            alt="Slider 7"
            className="w-full h-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
