import React from 'react';
import Slider from 'react-slick';

// Importing images (replace with your actual images)
import projectImage1 from '../assets/Website Header Images/Indeni.jpg';
import projectImage2 from '../assets/Website Header Images/Konkola-Copper-mine.jpg';
import projectImage3 from '../assets/Website Header Images/cement manufacture.jpg';
import projectImage4 from '../assets/Website Header Images/beverage manufacture.webp';

const ProjectSlider = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slide every 3 seconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-4">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">Our Projects</h2>
      <Slider {...settings}>
        <div>
          <img
            src={projectImage1}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={projectImage2}
            alt="Project 2"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={projectImage3}
            alt="Project 3"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src={projectImage4}
            alt="Project 4"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProjectSlider;
