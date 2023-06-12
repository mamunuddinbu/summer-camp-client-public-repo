import React from 'react';
import Slider from 'react-slick';
import './../../../css/slick.css';
import './../../../css/slick-theme.css';
import { motion } from 'framer-motion';

import img1 from './../../../assets/sliderIMG/1.jpg';
import img2 from './../../../assets/sliderIMG/2.jpg';
import img3 from './../../../assets/sliderIMG/3.jpg';
import img4 from './../../../assets/sliderIMG/4.jpg';
import img5 from './../../../assets/sliderIMG/5.jpg';
import img6 from './../../../assets/sliderIMG/6.jpg';
import img7 from './../../../assets/sliderIMG/7.jpg';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      text: 'Explore exciting destinations during our camp excursions.',
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="relative" key={index}>
            <img src={slide.image} alt={`Slider ${index + 1}`} className="w-full h-[400px]" />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-black via-transparent to-transparent p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-white text-3xl font-bold mb-4">{slide.text}</h2>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
