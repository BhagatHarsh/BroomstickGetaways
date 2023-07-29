import React from 'react';
import './Template_container.css';
import './Container.css';

function Container(props) {
  const data = props.data;

  return (
    <div className="container increased-height">
      <div className="partitions">
        <div className="upper">
          <h2>{data.name}</h2>
          <p>{data.itinerary}</p>
        </div>
        <div className="right-card">
          <h2></h2>
          <p className="price">Price = {data.price}</p>
          <p className="time">Time: 2 hours</p>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Container;
