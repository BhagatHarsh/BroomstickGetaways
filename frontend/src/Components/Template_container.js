import React from 'react';
import './Container.css';

function Template_container() {
  return (
    <div className="containe">
      <div className="left-side">
        <h2>Left Side Content</h2>
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
