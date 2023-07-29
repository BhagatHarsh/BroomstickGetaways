import React from 'react';
import Slideshow from './Slideshow.js';

function T1(props){
  const data = props.data;

  return (
    <div>
      <Slideshow images={data.images} />
    </div>
  );
}

export default T1;