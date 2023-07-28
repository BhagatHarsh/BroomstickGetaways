import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ item }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const cardStyle = {
    width: '18rem',
    margin: '1rem',
  };

  const truncatedDescription = item.itinerary && item.itinerary.length > 100
    ? `${item.itinerary.slice(0, 100)}...`
    : item.itinerary;

  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <Card style={cardStyle}>
        <Card.Img variant="top" src={item.images[0]} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {showFullDescription ? item.itinerary : truncatedDescription}
          </Card.Text>
          {item.itinerary && item.itinerary.length > 100 && (
            <Button
              variant="link"
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="read-more-button"
            >
              {showFullDescription ? 'Read less' : 'Read more'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </a>
  );
}

export default Cards;
