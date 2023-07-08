import React from 'react';
import { LoginParchment } from './LoginParchment';
import { FloatingQuills } from './FloatingQuills';
import { useInput } from '../hooks/useInput';
import styles from '../styles/Login.module.css';

export const Login = () => {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.value === 'harry' && password.value === 'potter') {
      alert('Welcome Harry!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.loginTitle}>Broomstick Getaways</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input type="text" {...username} placeholder="Username" />
          </div>  
          <div className={styles.inputBox}>
            <input type="password" {...password} placeholder="Password" />
          </div>       
          <button type="submit">Login</button>
        </form>
      </div>
      <FloatingQuills /> 
    </div>
  );
};