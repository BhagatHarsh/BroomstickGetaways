import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const DOMAIN = process.env.REACT_APP_DOMAIN;

const RatingsAndReviews = (props) => {
  const userData = props.userData;
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    await fetch(DOMAIN + 'review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ _id: props.data._id, reviewText: review, rating: rating }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // console.log(JSON.stringify({ _id: props.data._id, review: review, rating: rating }))
  };

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
              value={review}
              onChange={handleReviewChange}
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
              starColor="#f5a523"
              size={40}
              value={rating}
              onStarClick={handleRatingChange}
            />
          </Form.Group>
        </Form>
      </div>
      <Button variant="primary" type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem', alignSelf: 'center' }} onClick={handleSubmit} disabled={!userData || !userData.name}>
        {(!userData || !userData.name) ? "Please login!":"Submit"}
      </Button>

    </div>
  );
};

export default RatingsAndReviews;