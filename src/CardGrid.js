import React from 'react';
import './CardGrid.css';


import img1 from './assets/1-thumbnail.png';
import img2 from './assets/2-thumbnail.png';
import img3 from './assets/3-thumbnail.png';
import img4 from './assets/4-thumbnail.png';
import img5 from './assets/5-thumbnail.png';
import img6 from './assets/6-thumbnail.png';
import bg1 from './assets/1-background.png';
import bg2 from './assets/2-background.png';
import bg3 from './assets/3-background.png';
import bg4 from './assets/4-background.png';
import bg5 from './assets/5-background.png';
import bg6 from './assets/6-background.png';


const images = [img1, img2, img3, img4, img5, img6];
const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];

const CardGrid = ({ onCardClick }) => {
  if (typeof onCardClick !== 'function') {
    console.error('onCardClick is not a function');
    return null; 
  }

  return (
    <div className="card-grid">
      {images.map((image, index) => (
        <div
          className="card"
          key={index}
          onClick={() => onCardClick(backgrounds[index])} 
        >
          <img src={image} alt={`Card ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
