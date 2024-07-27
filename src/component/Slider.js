// import React from 'react'
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// import './Slider.css'

// const Slider = () => {
//   return (
//     <div>
//       <AwesomeSlider className="awesome-slider">
//     <div>
//     <img src="/images/ayurveda-1.jpg" alt="Slide 1"  />
//     </div>
//     <div>
//     <img src="/images/ayurveda-2.jpeg" alt="Slide 2"  />
//     </div>
//     <div>
//     <img src="/images/ayurveda-3.jpg" alt="Slide 3" />
//     </div>
//     <div>
//     <img src="/images/ayurveda-4.jpg" alt="Slide 4" />
//     </div>
//   </AwesomeSlider>
//     </div>
//   )
// }

// export default Slider


import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slider.css';

const Slider = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = document.querySelector('.awssld__next');
      if (nextButton) {
        nextButton.click();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <AwesomeSlider className="awesome-slider">
        <div>
          <img src="/images/ayurveda-1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/ayurveda-2.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/ayurveda-3.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="/images/ayurveda-4.jpg" alt="Slide 4" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
