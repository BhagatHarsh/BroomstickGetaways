import Navbar from './BasicExample.js'
import React, { useEffect, useState } from 'react';
import T1 from './T1.js';
import Template_container from './Template_container.js';
import T_CardContainer from './T_CardContainer.js';
import { useParams } from 'react-router-dom';

function Events() {
  
  const { id } = useParams();

  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3000/package/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log('data: ', data);
      })      
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, [id]);

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
