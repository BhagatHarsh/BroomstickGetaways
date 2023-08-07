import Navbar from './BasicExample.js'
import T1 from './T1.js';
import Template_container from './Template_container.js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RatingsAndReviews from './RatingsAndReviews.js';
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
  
  const { id } = useParams();

  const [data, setData] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUser().then((userData) => setProfile(userData));
  }, []);

  
  useEffect(() => {
    fetch(DOMAIN + `package/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
        console.log('data: ', data);
      })      
      .catch(error => {
        console.log('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [id]);
  
  if(isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <Navbar data = {profile}/>
      <T1 data = {data}/>
      <Template_container data ={data} userData={profile}/>
      <RatingsAndReviews data={data} userData={profile}/>
      <Footer/>
    </>
  );
}

export default Events;
