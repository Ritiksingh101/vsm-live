import React from 'react';
import Gita from "../logo_animate/gita1.jpg";
import Darshan_Shastra from "../logo_animate/darshan_shastra.jpg";
import Upanishad from "../logo_animate/Upanishad.png";
import Vedas from "../logo_animate/vedas.png";
import { useNavigate } from 'react-router-dom';
import './WelcomeBookBtn.css'

const WelcomeBookSection = () => {
  const navigate = useNavigate();

  const handleonclick = () => {
    navigate('/books');
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 w-full px-4 md:px-12 ">
        {/* Gita */}
        <div className="flex flex-col items-center">
          <img
            src={Gita}
            alt="Gita"
            onClick={handleonclick}
            className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-full shadow-lg mb-4 border-4 border-white transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
          <button
            className=" bg-white button_slide slide_right px-4 md:px-6 py-2 rounded-lg shadow-md font-semibold  button_slide slide_right hover:text-orange-500"
            onClick={handleonclick}
          >
            GITA
          </button>
        </div>

        {/* Vedas */}
        <div className="flex flex-col items-center">
          <img
            src={Vedas}
            onClick={handleonclick}
            alt="Vedas"
            className="w-[150px] md:w-[200px] cursor-pointer h-[150px] md:h-[200px] rounded-full shadow-lg mb-4 border-4 border-white transform transition-transform duration-300 hover:scale-110"
          />
          <button
            className="bg-white  button_slide slide_right px-4 md:px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-gray-200 hover:text-orange-500"
            onClick={handleonclick}
          >
            VEDAS
          </button>
        </div>

        {/* Upanishads */}
        <div className="flex flex-col items-center">
          <img
            src={Upanishad}
            alt="Upanishad"
            onClick={handleonclick}
            className="w-[150px] md:w-[200px] cursor-pointer h-[150px] md:h-[200px] rounded-full shadow-lg mb-4 border-4 border-white transform transition-transform duration-300 hover:scale-110"
          />
          <button
            className="bg-white button_slide slide_right px-4 md:px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-gray-200 hover:text-orange-500"
            onClick={handleonclick}
          >
            UPANISHADS
          </button>
        </div>

        {/* Darshan Shastras */}
        <div className="flex flex-col items-center">
          <img
            src={Darshan_Shastra}
            alt="Darshan Shastras"
            onClick={handleonclick}
            className="w-[150px] md:w-[200px] cursor-pointer h-[150px] md:h-[200px] rounded-full shadow-lg mb-4 border-4 border-white transform transition-transform duration-300 hover:scale-110"
          />
          <button
            className="bg-white button_slide slide_right px-4 md:px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-gray-200 hover:text-orange-500"
            onClick={handleonclick}
          >
            DARSHAN SHASTRAS
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBookSection;
