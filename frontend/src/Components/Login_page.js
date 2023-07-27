import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login_Page.css';


function Login_Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Username:', username);
      console.log('Password:', password);
      // Perform login logic here
    };
  
    return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <div className="button-container">
        <button className="submit-button" type="submit">Login</button>
      </div>
        <p className="register-link">Don't have an account? <Link to="/register">Register here</Link></p>

      </form>
      </div>
    );
  }
  
  export default Login_Page;

