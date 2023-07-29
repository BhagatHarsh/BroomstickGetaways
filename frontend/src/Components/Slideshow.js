import React, { useState, useEffect } from 'react';

function Slideshow({ images }) {
  
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, images]);

  return (
    <img
      src={(images[currentImageIndex])}
      alt={`${currentImageIndex}`}
      style={{ width: '100%',
      height: '13cm',
      objectFit: 'cover',
      objectPosition: 'center' }}
    />
  );
}

export default Slideshow;