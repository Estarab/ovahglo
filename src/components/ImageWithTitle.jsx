import React from 'react';
import heroImage from '../assets/other imgs/Completed Panels - reduced.JPG'; // Replace with your image path

const ImageWithTitle = ({ imageSrc = heroImage, title, description }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full">
        <img
          src={imageSrc}
          alt="Image with title"
          className="w-full max-h-[600px]  object-cover rounded-lg mx-auto" // Reduced size of the image
        />
        <h2 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center shadow-md w-11/12 max-w-2xl">
          {title}
        </h2>
      </div>

      {/* Description Heading */}
      <div className="mt-6 text-center">
        <h3 className="text-lg text-gray-300 font-medium">{description}hhhh</h3>
      </div>
    </div>
  );
};

export default ImageWithTitle;
