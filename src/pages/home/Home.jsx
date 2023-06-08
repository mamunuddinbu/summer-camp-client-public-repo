import React from 'react';
// import PopularClasses from '../components/PopularClasses';
// import PopularInstructors from '../components/PopularInstructors';
// import ExtraSection from '../components/ExtraSection';
import Slider from './compo/Slider';
import SliderComponent from './compo/Slider';
import useTitle from '../../hooks/useTitle';
import PopularClasses from './compo/PopularClasses';

const Home = () => {
  useTitle('Home..');
  return (
    <div>
      <SliderComponent/>

      <PopularClasses/>
      {/* 
      <PopularInstructors />
      <ExtraSection /> */}
    </div>
  );
};

export default Home;
