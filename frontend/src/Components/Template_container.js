import './Container.css';
import React, { useEffect, useState } from 'react';


function Template_container(props) {
  
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
    <div className="containe">
      <div className="left-side">
        <h2>{JSON.stringify(data)}</h2>
        <p>This is the content on the left side of the partition line.</p>
      </div>
      <div className="right-side">
        <h2>Right Side Content</h2>
        <div className="card">
          <h3>Card Title</h3>
          <p>This is the content of the card.</p>
        </div>
      </div>
    </div>
  );
}

export default Template_container;
