import React, { useEffect, useState } from 'react';
import Navbar from './BasicExample.js';
import Event_Image from './Event_Image.js';
import Footer from './Footer.js';
import ProfileCard from './ProfileCard.js';

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
    return data;
  } else {
    return null;
  }
}


async function getBookings() {
  const token = localStorage.getItem('token');
  const response = await fetch(DOMAIN + 'booked', {
    method: 'POST',
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

function Profile() {
  const [data, setData] = useState(null);
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    getUser().then((userData) => setData(userData));
  }, []);

  useEffect(() => {
    getBookings().then((bookingData) => setBookings(bookingData));
  }, []);

  if(bookings === null || data === null) {
    return <div>Loading...</div>
  }

  console.log(bookings);
  return (
    <>
      <Navbar data={data} />
      <Event_Image />
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
  <div className="card" style={{ width: '400px', backgroundColor: 'white', padding: '30px', border: '2px solid black' }}>
    <h5 className="card-title" style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold' }}>{data ? data.name : 'Loading...'}</h5>
    <h6 className="card-subtitle mb-2 text-muted" style={{ color: 'gray', fontSize: '18px' }}>{data ? data.email : 'Loading...'}</h6>
  </div>
</div>
      <ProfileCard/>
      <Footer />
    </>
  );
}

export default Profile;