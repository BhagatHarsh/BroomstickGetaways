import React from 'react';

const ReviewShowCard = ({ review }) => {
  console.log("rev" + review);
  const stars = [];
  for(let i = 0; i < review.rating; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: '#537e74' }}>
  <h2 style={{ color: 'white' }}>{review.user.name}</h2>
  <h2 style={{ color: 'white' }}>{review.package.name}</h2>  
  <div>{stars}</div>
  <p style={{ color: 'white' }}>{review.reviewText}</p>
</div>

  );
};

export default ReviewShowCard;
