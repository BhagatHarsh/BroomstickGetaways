import { useState } from 'react';
import './Template_container.css';
import './Container.css';
import Modal from './Modal';
import QRCodePayment from './QRCodePayment';

function Container(props) {
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
            <button className="book-now-button" onClick={handleOpenModal}>Book Now</button>
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
