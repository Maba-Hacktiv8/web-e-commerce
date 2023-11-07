import React from 'react';
import HERO from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="content">
        <div className="div-text">
          <span>outfit of the day</span>
          <h3>all your</h3>
          <h1>styles are here</h1>

          <a href="#" className="btn">
            buy now
          </a>
        </div>

        <div className="div-img">
          <img id="big-img" src={HERO} alt="jacket1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
