import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  const cardStyle = {
    width: '18rem',
    margin: '1rem'
  };
  
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={require('../Images/Image.jpg')} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;