import React from 'react';

const ReviewShowCard = ({ review }) => {
  console.log("rev" + review);
  const stars = [];
  for(let i = 0; i < review.rating; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{review.user.name}</h2>
      <h2>{review.package.name}</h2>  
      <div>{stars}</div>
      <p>{review.reviewText}</p>
    </div>
  );
};

export default ReviewShowCard;
