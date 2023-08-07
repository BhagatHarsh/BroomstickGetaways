import React, { useEffect, useState } from 'react';
import Navbar from './BasicExample.js';
import Event_Image from './Event_Image.js';
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
      <Navbar data={data} />
      <Event_Image />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{data ? data.name : 'Loading...'}</h5>
              <h6>{data ? data.email : 'Loading...'}</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;