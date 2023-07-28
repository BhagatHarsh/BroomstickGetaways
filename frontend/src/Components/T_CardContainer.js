import React from 'react';
import './T_CardContainer.css';

function CardContainer() {
  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the content of Card 1' },
    { id: 2, title: 'Card 2', content: 'This is the content of Card 2' },
    { id: 3, title: 'Card 3', content: 'This is the content of Card 3' },
    { id: 4, title: 'Card 4', content: 'This is the content of Card 4' },
    { id: 5, title: 'Card 5', content: 'This is the content of Card 5' },
    { id: 6, title: 'Card 6', content: 'This is the content of Card 6' },
    { id: 7, title: 'Card 7', content: 'This is the content of Card 7' },
    { id: 8, title: 'Card 8', content: 'This is the content of Card 8' },
    { id: 9, title: 'Card 9', content: 'This is the content of Card 9' },
    { id: 10, title: 'Card 10', content: 'This is the content of Card 10' },
  ];

  return (
    <div className="card-container">
      <div className="card-container__inner">
        {cards.map(card => (
          <div className="car" key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
