import React from 'react';
import { LoginParchment } from './LoginParchment';
import { FloatingQuills } from './FloatingQuills';
import { useInput } from '../hooks/useInput';
import styles from '../styles/Login.module.css'; // Import the CSS file as a module

export const Login = () => {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Broomstick Getaways</h1>
      <FloatingQuills />
      <LoginParchment
        username={username}
        password={password}
        onSubmit={handleSubmit}
      />
    </div>
  );
};