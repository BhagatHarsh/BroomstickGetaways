import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ Data }) => {
  const formattedDate = new Date(Data.dateOfBooking).toLocaleDateString("en", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  });

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <div className="card" style={{ width: '400px', backgroundColor: 'white', padding: '30px', border: '2px solid black' }}>
      <Link to={`/Event_template/${Data.package._id}`} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold', paddingBottom: '3mm'}}>
            {Data.package.name}
          </Link>
        <h6 className="card-subtitle mb-2 text-muted" style={{ color: 'gray', fontSize: '18px' }}>Price : {Data.package.price} Galleons</h6>
        <h6 className="card-subtitle mb-2 text-muted" style={{ color: 'gray', fontSize: '18px' }}>Date of Booking : {formattedDate}</h6>

      </div>
    </div>

  );
};

export default ProfileCard;
