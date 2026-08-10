import React from 'react';

import heroVideo1 from '../assets/projects/video3.mp4';
import heroImage1 from '../assets/other imgs/Classic PLC under Assembly.jpg'; // Add your image imports
import heroImage2 from '../assets/other imgs/vent Fan Power.JPG';
import heroImage3 from '../assets/projects/hero.jpg';

// Add your media (video and images) in an array
const heroMedia = [
  heroVideo1,
  heroImage1,
  heroImage2,
  heroImage3,
  
];

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <section className="relative bg-black h-screen text-center text-white">
      {/* Background Media */}
      <div className="absolute inset-0">
        {heroMedia[currentMediaIndex].endsWith('.mp4') ? (
          <video
            src={heroMedia[currentMediaIndex]}
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        ) : (
          <img
            src={heroMedia[currentMediaIndex]}
            alt="hero"
            className="object-cover w-full h-full"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay for contrast */}

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-white bg-slate-700 mb-4">
          {/* Add your title here */}
          Welcome to Intelligent Systems Limited (ISL)
        </h1>

        <div className="flex justify-center space-x-8">
          {/* Learn More Button */}
          <a
            href="/services"
            className="inline-block text-white font-semibold py-3 px-6 bg-blue-700 rounded-lg shadow-md hover:bg-slate-700 transform transition duration-300"
          >
            Learn More
          </a>

          {/* Contact Us Button */}
          <a
            href="/contact"
            className="inline-block text-white font-semibold py-3 px-6 bg-blue-700 rounded-lg shadow-md hover:bg-slate-700 transform transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;



// import React from 'react';
// import heroVideo1 from '../assets/projects/vid.mp4';
// import heroVideo2 from '../assets/projects/video3.mp4';
// import heroVideo3 from '../assets/projects/vid5.mp4';
// import heroVideo4 from '../assets/projects/video4.mp4';
// import heroVideo5 from '../assets/projects/vid1.mp4';
// import heroVideo6 from '../assets/projects/video3.mp4';
// import heroVideo7 from '../assets/projects/vid.mp4';
// import heroVideo8 from '../assets/projects/vid1.mp4';

// // Add your videos in an array
// const heroVideos = [
//   heroVideo1,
//   heroVideo2,
//   heroVideo3,
//   heroVideo4,
//   heroVideo5,
//   heroVideo6,
//   heroVideo7,
//   heroVideo8,
// ];

// const Hero = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
//     }, 5000); // Change video every 5 seconds

//     return () => clearInterval(intervalId); // Clean up on component unmount
//   }, []);

//   return (
//     <section className="relative bg-black h-screen text-center text-white">
//       {/* Video background */}
//       <div className="absolute inset-0">
//         <video
//           src={heroVideos[currentVideoIndex]}
//           autoPlay
//           loop
//           muted
//           className="object-cover w-full h-full"
//         />
//       </div>

//       <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay for contrast */}

//       <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
//         <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-white bg-slate-700 mb-4 ">
//           {/* Add your title here */}
//           Welcome to Intelligent Systems Limited (ISL)
//         </h1>
// {/* 
//         <p className="text-xl sm:text-2xl mb-8 text-white opacity-80">
          
//           We provide top-notch automation and low voltage systems that empower your business.
//         </p> */}

//         <div className="flex justify-center space-x-8">
//           {/* Learn More Button */}
//           <a
//             href="/services"
//             className="inline-block text-white font-semibold py-3 px-6 bg-blue-700 rounded-lg shadow-md hover:bg-slate-700 transform transition duration-300"
//           >
//             Learn More
//           </a>

//           {/* Contact Us Button */}
//           <a
//             href="/contact"
//             className="inline-block text-white font-semibold py-3 px-6 bg-blue-700 rounded-lg shadow-md hover:bg-slate-700 transform transition duration-300"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






