import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slider.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSliders } from '../redux/slices/sliderSlice';

const Slider = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sliders, status, error } = useSelector(state => state.slider);
  // const [selectedCategory, setSelectedCategory] = React.useState(null);
  // console.log("sliders123 13  ---> ",sliders);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSliders());
    }
  }, [status, dispatch]);

  // console.log("sliders123 Sliders --> ", sliders);
  // console.log("sliders123 status --> ", status);
  // console.log("sliders123 error --> ", error);
  

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
          <img src="/images/ayurveda-2.jpeg" alt="Slide 2" className="w-full h-auto object-cover" />
        </div>
        <div>
        <img src="/images/ayurveda-3.jpg" alt="Slide 3"  />
        </div>
        <div>
          <img src="/images/ayurveda-4.jpg" alt="Slide 4" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
