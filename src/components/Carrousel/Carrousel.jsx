import React, { useState } from 'react';
import arrowLeft from '../../assets/Arrow_left.png';
import './Carrousel.scss';

function Carrousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(pictures.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex === pictures.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <>
      <div className='carrousel'>
        {pictures.length > 1 && (
          <img
            className='previous_button'
            src={arrowLeft}
            alt='flèche'
            onClick={goToPreviousImage}
          />
        )}

        <img src={pictures[currentImageIndex]} alt='images carrousel' />

        {pictures.length > 1 && (
          <img
            className='next_button'
            src={arrowLeft}
            alt='flèche'
            onClick={goToNextImage}
          />
        )}

        {pictures.length > 1 && (
          <div className='image_counter'>
            {currentImageIndex + 1}/{pictures.length}
          </div>
        )}
      </div>
    </>
  );
}

export default Carrousel;