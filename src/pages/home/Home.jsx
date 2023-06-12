// import React from 'react';
import SliderComponent from './compo/Slider';
import useTitle from '../../hooks/useTitle';
import PopularClasses from './compo/PopularClasses';
import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  useTitle('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home ${isDarkMode ? "dark" : "light"}`}>

      <button className='btn m-3' onClick={handleToggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <SliderComponent/>
      <h1 className="text-3xl text-center bg-green-400 m-4 p-4">Popular Classes</h1>
      <PopularClasses/>
    </div>
  );
};

export default Home;
