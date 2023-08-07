import Navbar from './BasicExample.js'
import Event_Image from './Event_Image.js';
import Event_cardContainer from './Event_cardContainer.js';
import { useState, useEffect } from 'react';
import Footer from './Footer.js';

const DOMAIN = process.env.REACT_APP_DOMAIN;

async function getUser() {
  const token = localStorage.getItem('token');
  const response = await fetch(DOMAIN + 'profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    return null;
  }

}

function Events() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getUser().then((userData) => setData(userData));
  }, []);


  return (
    <>
      <Navbar data={data} />
      <Event_Image />
      <Event_cardContainer />
      <Footer />
    </>
  );
}

export default Events;
