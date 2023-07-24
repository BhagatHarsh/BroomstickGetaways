import React from 'react';


function Event_Image() {
    return (
        <div id ="image-container">
            <img
          src={require('../Images/Image.jpg')}
          style={{ width: '100vw',
          height: '4cm',
          objectFit: 'none',
          objectPosition: 'center' }}
        />
        </div>
        
      );

}

export default Event_Image;