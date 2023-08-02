import Navbar from './BasicExample.js'
import FrontImage from './FrontImage.js';
import CardContainer from './CardContainer.js';
import React, { useState, useEffect } from 'react';
import Footer from './Footer.js';

async function getUser() {
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
    console.log(data); 
    return data;
  } else {
    return null;
  }

}

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getUser().then((userData) => setData(userData));
  }, []);

  

  return (
    <>
      <Navbar data={data} />
      <FrontImage />
      <CardContainer />
      <Footer/>
    </>
  );
}

export default Home;
