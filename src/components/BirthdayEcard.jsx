import React from 'react';

// Import images from assets folder
import birthdayImage1 from '../assets/img1.JPG';
import birthdayImage2 from '../assets/img3.JPG';

const BirthdayEcard = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
     

      {/* Main content */}
      <div className="max-w-lg w-full bg-white p-6 rounded-xl shadow-xl relative z-10">
         {/* Background image */}
      {/* <div className="absolute inset-0">
        <img
          src={birthdayImage2}
          alt="Birthday Background"
          className="w-full h-full object-cover opacity-50 filter brightness-50 blur-sm"
        />
      </div> */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-owhite">
            Happy Birthday!
          </h1>
          <p className="text-xl text-gray-700 mt-2">
            Wishing you a day filled with love, joy, and celebration!
          </p>
        </div>

        {/* Images Section */}
        <div className="flex justify-center items-center space-x-4">
          {/* Main Image - 60% of the ecard, centered */}
          <div className="relative w-3/5 h-auto">
            <img
              src={birthdayImage1}
              alt="Birthday Image 1"
              className="w-full h-full object-cover rounded-lg shadow-lg filter brightness-150"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%)',  // For Safari
              }}
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300">
            Celebrate Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayEcard;


