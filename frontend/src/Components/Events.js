import Navbar from './BasicExample.js'
import Event_Image from './Event_Image.js';
// import Event_card from './Event_card.js';
// import FrontImage from './FrontImage.js';
import CardContainer from './CardContainer.js';
import Event_cardContainer from './Event_cardContainer.js';
import React from 'react';

async function getUsers() {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3000/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

function Events() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getUsers().then((userData) => setData(userData));
  }, []);

  if (!data) {
    return (<>
      <Navbar />
      <Event_Image/>
      <Event_cardContainer/> 
    </>);
  }

  return (
    <>
      <h1>{data.name}</h1>
      <Navbar />
      <Event_Image/>
      <Event_cardContainer/> 
    </>
  );
}

export default Events;
