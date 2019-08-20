import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
        <div container>
          
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        
        <Carousel.Item>
          <img 
            className="d-block w-100 h-75 d-inline-block"
            src="images/bg_1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          <h1 class="mb-4"> We connect kids to create everlasting memories </h1>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100 h-75 d-inline-block"
            src="images/bg_2.1.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h1 class="heading2">Reimagining childcare with <span> palydate pal </span></h1>
           
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      
      </div>
      
    );
  }
  


  export default Slider;