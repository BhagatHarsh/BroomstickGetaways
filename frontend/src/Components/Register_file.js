import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register_file.css';

const DOMAIN = process.env.REACT_APP_DOMAIN;

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSuccessfulRegistration = () => {
    setSuccessful(true);
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
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Perform registration logic here

    fetch(DOMAIN + 'register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name, email: email, password: password
      }),
    }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        alert('Registration successful!');
        handleSuccessfulRegistration();
      } else {
        alert('Registration failed!');
      }
    }).catch((error) => {
      console.error('Error:', error);
    });

  };

  if(successful) {
    window.location.href = '/LoginSignup';  
  }

  return (
    <div className="containers">
      <div className="navbar">
        {/* Add your navbar content here */}
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <br />
          <label>
            Email ID:
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <br />
          <div className="button-container">
            <button className="submit-button" type="submit">Register</button>
          </div>
          <p className="register-link">Already have an account? <Link to="/LoginSignup">Login here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
