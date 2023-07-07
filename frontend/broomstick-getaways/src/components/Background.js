import React from 'react';
import { useAnimation } from '../hooks/useAnimation';
import backgroundImage from '../assets/background.jpg'; // Import the background image
import '../styles/Background.css'; // Import CSS for animations

export const Background = () => {
  const { animateStars, animateLanterns } = useAnimation();

  return (
    <div
      className="background"
      onMouseMove={animateStars}
      onClick={animateLanterns}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Add this line to make the background image cover the entire container
        position: 'fixed', // Add this line to fix the background position
        width: '100%', // Add this line to set the width of the background container
        height: '100%', // Add this line to set the height of the background container
        zIndex: -1, // Add this line to make sure the background is behind other elements
      }}
    >
      <div className="animation-container"> {/* Add a container for your animations */}
        <div className="animation animation1"></div> {/* Add your animation elements */}
        <div className="animation animation2"></div>
        {/* Add more animation elements as needed */}
      </div>
    </div>
  );
};