import React from 'react';
import { Form, Button } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const RatingsAndReviews = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '1rem' }}>
        <h2 style={{ textAlign: 'center' }}>Reviews</h2>
        <Form>
          <Form.Group>
            <Form.Label>Write a review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your review"
            />
          </Form.Group>
        </Form>
      </div>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Ratings</h2>
        <Form>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <br />
            <StarRatingComponent
              name="starRating"
              starCount={5}
              emptyStarColor="#ccc"
              editing={true}
              starColor="#f5a523"
              size={40} // Adjust the size of the stars as desired
            />
          </Form.Group>
        </Form>
      </div>
      <Button variant="primary" type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem', alignSelf: 'center' }}>  {/* Update the button style to add padding and center it */}
        Submit
      </Button>
    </div>
  );
};

export default RatingsAndReviews;
