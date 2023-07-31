import Navbar from './BasicExample.js'
import Event_Image from './Event_Image.js';
// import Event_card from './Event_card.js';
// import FrontImage from './FrontImage.js';
import CardContainer from './CardContainer.js';
import Event_cardContainer from './Event_cardContainer.js';
import React from 'react';
import Footer from './Footer.js';


function Profile() {
  return (
    <>
      <Navbar />
      <Event_Image/>
      <Footer/>
    </>
  );
}

export default Profile;
