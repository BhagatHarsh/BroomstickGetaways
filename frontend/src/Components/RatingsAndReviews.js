import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const RatingsAndReviews = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '50vh', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '50%', display: 'flex' }}>
        <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: '10px', marginLeft: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      </div>
    </div>
  );
};

export default RatingsAndReviews;
