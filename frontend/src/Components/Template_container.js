import React from 'react';
import './Template_container.css';

function Container() {
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
      <div className="right-side">
        <div className="cardss">
          <h3>Card Title</h3>
          <p>This is the content of the card.</p>
        </div>
      </div>
    </div>
  );
}

export default Container;
