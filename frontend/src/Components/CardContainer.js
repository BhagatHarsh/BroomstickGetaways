import React, { useEffect, useState } from 'react';
import Card from './Cards';
import './Container.css';

function CardContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/packages', {
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
    <div className="CardContainer" style={{ overflowX: 'auto' }}>
      <div className="CardContainer__inner">
        {data.map(item => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
