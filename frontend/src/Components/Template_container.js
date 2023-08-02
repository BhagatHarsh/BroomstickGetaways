import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Template_container.css';
import './Container.css';
import Modal from './Modal';
import QRCodePayment from './QRCodePayment';

async function getUser() {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3000/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    return null;
  }
}

function Container(props) {
  const [userData, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    getUser().then((userData) => {
      setData(userData);
      setLoading(false); // Set loading to false once the data is fetched
    });
  }, []);

  const data = props.data;
  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setShowModal(false);
  };

  // Check if user is logged in
  const isLoggedIn = userData && userData.name !== undefined && userData.name !== '';

  // If the data is still loading, return a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

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
            {isLoggedIn ? (
              <button className="book-now-button" onClick={handleOpenModal}>
                Book Now
              </button>
            ) : (
              <Link
                to="/LoginSignup"
                className="book-now-button"
              >
                Continue to Login
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
