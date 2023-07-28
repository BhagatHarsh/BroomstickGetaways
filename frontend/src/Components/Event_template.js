import Navbar from './BasicExample.js'
import Event_Image from './Event_Image.js';
// import Event_card from './Event_card.js';
// import FrontImage from './FrontImage.js';
import CardContainer from './CardContainer.js';
import Event_cardContainer from './Event_cardContainer.js';
import React from 'react';
import T1 from './T1.js';
import Template_container from './Template_container.js';
import T_CardContainer from './T_CardContainer.js';
// import FrontImage from './FrontImage.js';


function Events() {

  return (
    <>
      <Navbar />
      <T1/>
      <Template_container/>
      <T_CardContainer/>
    </>
  );
}

export default Events;
