// import React from 'react';
import './Template_container.css';
import './Container.css';
import React, { useEffect, useState } from 'react';

function Container(props) {
    
  
  const id = props.id;
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3000/package/${id}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001'
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
    <div className="partitions">
      <div className="upper">
        <h2>Upper Partition</h2>
        <p>This is the content in the upper partition.</p>
      </div>
      <div className="partition"></div>
      <div className="lower">
        <h2>Lower Partition</h2>
        <p>This is the content in the lower partition.</p>
      </div>
      </div>
      </div>
  );
}

export default Container;
