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
          <img src="/images/ved_science_slider/poster1.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/ved_science_slider/poster2.png" alt="Slide 2" />
        </div>
        <div>
        <img src="/images/ved_science_slider/poster3.png" alt="Slide 3"  />
        </div>
        {/* <div>
          <img src="/images/ved_science_slider/poster1.png" alt="Slide 4" />
        </div> */}
      </AwesomeSlider>
    </div>


  //   <div id="carouselExampleDark" 
  //       className="carousel slide carousel-dark relative w-full"
  //       data-bs-ride="carousel">
  //       {/* Carousel Indicators */}
  //     <div class="carousel-indicators absolute right-0 
  //                 bottom-0 left-0 flex justify-center 
  //                 p-0 mb-4">
  //       <button type="button" 
  //               data-bs-target="#carouselExampleDark" 
  //               data-bs-slide-to="0" 
  //               class="active" 
  //               aria-current="true" 
  //               aria-label="Slide 1"
  //               ></button>
  //       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  //       <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  //     </div>

  //     {/* Carousel Inner */}
  //     <div class="carousel-inner relative w-full overflow-hidden">
  //       {/* Slide 1 */}
  //       <div class="carousel-item active active 
  //       relative float-left flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 w-full md:w-1/2 mb-4 md:mb-0 md:mr-6"
  //        data-bs-interval="10000"
  //        >
  //         <img src="/images/ayurveda-1.jpg" 
  //         className="w-full h-auto object-cover rounded-lg shadow-md" alt="Book 1"/>
  //         <div class="carousel-caption d-none d-md-block">
  //           <h5>First slide label</h5>
  //           <p>Some representative placeholder content for the first slide.</p>
  //         </div>
  //       </div>
  //       <div class="carousel-item" data-bs-interval="2000">
  //         <img src="/images/ayurveda-2.jpg" class="d-block w-100" alt="Book 2"/>
  //         <div class="carousel-caption d-none d-md-block">
  //           <h5>Second slide label</h5>
  //           <p>Some representative placeholder content for the second slide.</p>
  //         </div>
  //       </div>
  //       <div class="carousel-item">
  //         <img src="/images/ayurveda-3.jpg" class="d-block w-100" alt="Book 3"/>
  //         <div class="carousel-caption d-none d-md-block">
  //           <h5>Third slide label</h5>
  //           <p>Some representative placeholder content for the third slide.</p>
  //         </div>
  //       </div>
  //     </div>
  //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  //       <span class="visually-hidden">Previous</span>
  //     </button>
  //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
  //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
  //       <span class="visually-hidden">Next</span>
  //     </button>
  //   </div>
  );
};

export default Slider;
