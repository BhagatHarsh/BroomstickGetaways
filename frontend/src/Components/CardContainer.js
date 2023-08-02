import React, { useEffect, useState, useRef } from 'react';
import p5 from 'p5';
import Card from './Cards';
import './Container.css';

function CardContainer() {
  const [data, setData] = useState([]);
  const canvasRef = useRef();

  useEffect(() => {

    // Add your p5.js Star sketch here
    const sketch = (p) => {

      let stars = [];

      const Star =  function () {

        this.x = p.random(-p.width, p.width);
        this.y = p.random(-p.height, p.height);
        this.z = p.random(p.width);
        this.pz = this.z;

        this.update = function () {
          this.z = this.z - 20;
          if (this.z < 1) {
            this.z = p.width;
            this.x = p.random(-p.width, p.width);
            this.y = p.random(-p.height, p.height);
            this.pz = this.z;
          }
        }

        this.show = function () {
          p.fill(0);
          p.noStroke();
  
          let sx = p.map(this.x / this.z, 0, 1, 0, p.width);
          let sy = p.map(this.y / this.z, 0, 1, 0, p.height);
  
          let r = p.map(this.z, 0, p.width, 16, 0);
          p.ellipse(sx, sy, r, r);
  
          let px = p.map(this.x / this.pz, 0, 1, 0, p.width);
          let py = p.map(this.y / this.pz, 0, 1, 0, p.height);
  
          this.pz = this.z;
  
          p.stroke(0);
          p.line(px, py, sx, sy);
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.style.position = 'absolute';
        p.canvas.style.zIndex = '-1';
        for (let i = 0; i < 800; i++) {
          stars[i] = new Star();
        }
        console.log(stars);
      };

      p.draw = () => {
        p.background(144, 238, 144); // light green
        p.translate(p.width / 2, p.height / 2);
        for (let i = 0; i < stars.length; i++) {
          stars[i].update();
          stars[i].show();
        }
      };
    }
    
    const canvas = new p5(sketch, canvasRef.current);

    return () => {
      // Clean up canvas on component unmount
      canvas.remove();
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/packages', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001'
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  const limitedData = data.slice(0, 6); // Take only the first 6 items

  return (
    
    <div className="CardContainer" style={{ overflowX: 'auto' }}>
      <div ref={canvasRef}></div>
      
      <div className="CardContainer__inner" style={{ position: 'relative', zIndex: '1' }}>
        {limitedData.map(item => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
