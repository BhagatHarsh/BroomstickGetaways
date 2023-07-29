import Navbar from './BasicExample.js'
import T1 from './T1.js';
import Template_container from './Template_container.js';
import T_CardContainer from './T_CardContainer.js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Events() {
  
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(`http://localhost:3000/package/${id}`, {
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
      <Navbar />
      <T1 data = {data}/>
      <Template_container data ={data}/>
      <T_CardContainer/>
      
    </>
  );
}

export default Events;
