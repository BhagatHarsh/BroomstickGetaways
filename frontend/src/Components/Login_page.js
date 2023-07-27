import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login_Page.css';


function Login_Page() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleSuccessfulRegistration = () => {
      setSuccessful(true);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);

      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      .then((response) => {
        response.json()
        if (response.status === 200) {
          alert('Login successful!');
        }
        else {
          alert('Login failed!');
        }
      })
      .then((data) => {
        console.log('Success:', data);
        localStorage.setItem('token', data.accessToken);
      }
      )
    };

  
    return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
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

