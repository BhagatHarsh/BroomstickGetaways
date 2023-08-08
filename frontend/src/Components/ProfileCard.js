import React from 'react';

const ProfileCard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="card" style={{ width: '400px', backgroundColor: 'white', padding: '30px', border: '2px solid black' }}>
        <h5 className="card-title" style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold' }}>Jineet</h5>
        <h6 className="card-subtitle mb-2 text-muted" style={{ color: 'gray', fontSize: '18px' }}>Shah</h6>
      </div>
    </div>
  );
};

export default ProfileCard;
