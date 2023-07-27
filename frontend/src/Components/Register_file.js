import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register_file.css';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Perform registration logic here

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name, email: email, password: password
      }),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
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
    return (
      <div>
        <h1>Registration successful!</h1>
        <p>
          <Link to="/login">Click here to login</Link>
        </p>
      </div>
    );
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
