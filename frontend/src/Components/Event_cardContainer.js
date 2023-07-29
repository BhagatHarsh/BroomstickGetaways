import React, { useEffect, useState } from 'react';
import Card from './Cards';
import './Event_Card.css';

function CardContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/packages', {
      method: 'GET'
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
    <div className="CardContainers" style={{ overflowX: 'auto' }}>
      <div className="CardContainer__inners">
        {data.map(item => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
