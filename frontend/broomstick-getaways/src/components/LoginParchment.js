import React from 'react';

export const LoginParchment = ({ email, username, password, onSubmit }) => {
  return (
    <form className="parchment-form" onSubmit={onSubmit}>
      {/* Render email, username, password fields, and buttons here */}
    </form>
  );
};