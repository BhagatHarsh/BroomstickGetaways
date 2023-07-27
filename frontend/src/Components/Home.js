import Navbar from './BasicExample.js'
import FrontImage from './FrontImage.js';
import CardContainer from './CardContainer.js';
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

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getUsers().then((userData) => setData(userData));
  }, []);

  if (!data) {
    return (<>
      <Navbar />
      <FrontImage />
      <CardContainer />
    </>);
  }

  return (
    <>
      <h1>{data.name}</h1>
      <Navbar />
      <FrontImage />
      <CardContainer />
    </>
  );
}

export default Home;
