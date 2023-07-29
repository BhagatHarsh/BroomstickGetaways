import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login_Page.css';

function Login_Page() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const validateEmail = (email) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!validateEmail(email)) {
        alert('Invalid email format!');
        return;
      }
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
        console.log(response);
        if (response.status === 200) {
          alert('Login successful!');
        }
        else {
          alert('Login failed!');
        }
        return response.json()
      })
      .then((data) => {
        console.log('Success:', data);
        localStorage.setItem('token', data.accessToken);
        window.location.href = '/';
      }
      )
    };

  
    return (
    <div className="containerr">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
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
