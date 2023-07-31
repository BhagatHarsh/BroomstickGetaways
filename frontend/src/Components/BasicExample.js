import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample({ data }) {

  const [username, setUsername] = useState(null);

  useEffect(() => {
    setUsername(data ? data.name : 'Login');
  }, [data]);

  const styles = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    backdropFilter: 'blur(1000px)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    opacity: 0.8,
    // Add fontWeight property to make the text bolder
    fontWeight: 'bold',
    borderRadius:'40px'
  };
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={styles}>
        <Navbar.Brand href="/">Broomstick-Getaways</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/LoginSignup">{username}</Nav.Link>
            <Nav.Link href="/Events">Packages</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
