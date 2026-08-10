import React from 'react';
import Slider from 'react-slick';
import plcImage from '../assets/other imgs/Mini Classic Controllers.jpg';  // Replace with your actual image paths
import mccImage from '../assets/other imgs/VSD Training Units In Their cases.jpg';  // Replace with your actual image paths
import scadaImage from '../assets/other imgs/vent Fan Power.JPG';  // Replace with your actual image paths

const SystemsSlider = () => {
  // Slick slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6 text-white">Integrated Plant and Machine Control Systems</h2>
      <p className="text-xl text-center mb-2 text-white">Including PLC Control, Motor Control Centres, and SCADA</p>

      <div className="max-w-3xl mx-auto"> {/* Set max-width to 3xl */}
        <Slider {...settings}>
          <div>
            <img src={plcImage} alt="PLC Control" className="w-full h-74 rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={mccImage} alt="Motor Control Centres" className="w-full h-74 rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={scadaImage} alt="SCADA Systems" className="w-full h-74 rounded-lg shadow-lg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SystemsSlider;
