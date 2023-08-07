import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Template_container.css';
import './Container.css';
import Modal from './Modal';
import QRCodePayment from './QRCodePayment';

const DOMAIN = process.env.REACT_APP_DOMAIN;

async function bookPackage(data) {
  const token = localStorage.getItem('token');
  const response = await fetch( DOMAIN + 'book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return response.status;
}

function Container(props) {
  const [booked, setBooked] = useState(false); // Add a booked state
  const userData = props.userData;

  const data = props.data;
  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setShowModal(false);
        bookPackage(data).then((status) => {
      if (status === 200) {
        setBooked(true);
      } else {
        console.log('Booking failed');
      }
    });
  };

  const handleBookPackage = () => {
    handleOpenModal();
  };

  // Check if user is logged in
  const isLoggedIn = userData && userData.name !== undefined && userData.name !== '';

  // Once the data has been fetched, render the component as usual
  return (
    <div className="container increased-height">
      <div className="partitions">
        <div className="upper">
          <h2>{data.name}</h2>
          <p>{data.itinerary}</p>
        </div>
        <div className="right-card">
          <h2></h2>
          <p className="price">Price = {data.price} Galleon</p>
          <p className="time">Time: {data.time} days</p>
          <div>
            {isLoggedIn && !booked && (
              <button className="book-now-button" onClick={handleBookPackage}>
                Book Now
              </button>
            )}
            {!isLoggedIn && !booked && (
              <Link to="/LoginSignup" className="book-now-button">
                Login to Continue
              </Link>
            )}
            <Modal show={showModal} handleClose={() => setShowModal(false)}>
              <QRCodePayment onPaymentSuccess={handlePaymentSuccess} />
            </Modal>
            {paymentSuccess && <p>Payment was successful!</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;