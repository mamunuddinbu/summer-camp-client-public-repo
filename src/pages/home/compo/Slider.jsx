import React from 'react';
import Slider from 'react-slick';
import './../../../css/slick.css';
import './../../../css/slick-theme.css';

import img1 from './../../../assets/sliderIMG/1.jpeg';
import img2 from './../../../assets/sliderIMG/2.jpg';
import img3 from './../../../assets/sliderIMG/3.jpeg';
import img4 from './../../../assets/sliderIMG/4.jpeg';
import img5 from './../../../assets/sliderIMG/5.jpeg';
import img6 from './../../../assets/sliderIMG/6.jpeg';
import img7 from './../../../assets/sliderIMG/7.jpeg';
import img8 from './../../../assets/sliderIMG/8.jpeg';

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

  const slides = [
    {
      image: img1,
      text: 'Join our summer camp and learn a new language!',
    },
    {
      image: img2,
      text: 'Immerse yourself in the language and culture of your choice.',
    },
    {
      image: img3,
      text: 'Experience fun activities and make lifelong memories.',
    },
    {
      image: img4,
      text: 'Our qualified teachers provide interactive language lessons.',
    },
    {
      image: img5,
      text: 'Discover new friendships and connect with students from around the world.',
    },
    {
      image: img6,
      text: 'Explore exciting destinations during our camp excursions.',
    },
    {
      image: img7,
      text: 'Enhance your language skills through engaging workshops.',
    },
    {
      image: img8,
      text: 'Join us for an unforgettable summer adventure!',
    },
  ];

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="w-full h-3/4" key={index}>
            <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-3xl font-bold bg-red-600 mb-4">{slide.text}</h2>
            </div>
            <img src={slide.image} alt={`Slider ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
