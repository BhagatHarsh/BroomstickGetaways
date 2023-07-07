import React from 'react';
import { LoginParchment } from './LoginParchment';
import { FloatingQuills } from './FloatingQuills';
import { useInput } from '../hooks/useInput';

export const SignUp = () => {
  const email = useInput('');
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add sign-up logic here
  };

  return (
    <div className="sign-up-container">
      <FloatingQuills />
      <LoginParchment
        email={email}
        username={username}
        password={password}
        onSubmit={handleSubmit}
      />
    </div>
  );
};