import React from 'react';
import Slideshow from './Slideshow.js';

function T1() {
  const images = [
    require('../Images/Image.jpg'),
    require('../Images/images1.jpeg'),
    require('../Images/Images2.jpeg')
  ];

  


  return (
    <div>
      <Slideshow images={images} />
    </div>
  );
}

export default T1;