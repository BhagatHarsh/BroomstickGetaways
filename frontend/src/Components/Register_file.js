import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register_file.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Mobile Number:', mobileNumber);
    console.log('Address:', address);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Perform registration logic here
  };

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
            Mobile Number:
            <input
              type="text"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              required
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
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
          <label>
            Re-enter Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
