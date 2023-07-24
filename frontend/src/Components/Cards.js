import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ item }) {
  const cardStyle = {
    width: '18rem',
    margin: '1rem'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={item.images[0]} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.itinerary}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
