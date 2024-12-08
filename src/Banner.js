import React, { useState } from 'react';
import './Banner.css';
import CardGrid from './CardGrid'; 

import dogImage from './assets/1-foreground-cutout.png'; 
import backgroundImage from './assets/1-background.png'; 

const Banner = () => {
  const [background, setBackground] = useState(backgroundImage); 
  const [showDog, setShowDog] = useState(true); 

  
  const handleCardClick = (image) => {
    setBackground(image); 
    setShowDog(false); 
  };

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${background})` }} 
    >
      
      <div className="banner-content">
        <h2>
          MOREFROM<br />
          RICOTHEDOG
        </h2>
        <button className="learn-more1">Rico is back</button>
        <h1>RICOBOT</h1>
        <p>
          Charge into a brand-new supersized adventure with RICO across 50
          exciting and diverse worlds, available now on PS5!
        </p>
        <button className="learn-more">Learn More</button>
      </div>

      
      {showDog && <img src={dogImage} alt="Dog" className="dog-image" />}

    
      <CardGrid onCardClick={handleCardClick} />
    </div>
  );
};

export default Banner;
