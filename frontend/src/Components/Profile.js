import Navbar from './BasicExample.js'
import Event_Image from './Event_Image.js';
import { useEffect, useState } from 'react';
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


function Profile() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getUser().then((userData) => setData(userData));
  }, []);

  return (
    <>
      <Navbar data={data}/>
      <Event_Image/>
      <Footer/>
    </>
  );
}

export default Profile;
