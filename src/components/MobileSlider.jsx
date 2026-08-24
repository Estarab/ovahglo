import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

// Import your media (1 video and 3 images)
import video1 from '../assets/our work/mobilebanner1.png';  
import image1 from '../assets/our work/embroiderymobile.png'; 
import image2 from '../assets/our work/webdev-mobile.png';
import image3 from '../assets/our work/embroiderymobile.png';
import image4 from '../assets/our work/embroiderymobile.png';
import image5 from '../assets/our work/embroiderymobile.png';
import image6 from '../assets/our work/embroiderymobile.png';
import image7 from '../assets/our work/embrodery2.jpg';


const sliderData = [
  {
    media: video1, // First slide will be a video
    // title: 'Welcome to Ovahglo',
  },
  {
    media: image1, // Image slides
    // title: 'Advertising. Branding and Printing Company',
  },
  {
    media: image2,
    title: '',
  },
  {
    media: image3,
    title: '',
  },
  {
    media: image4,
    title: '',
  },
  {
    media: image5,
    title: '',
  },
  {
    media: image6,
    title: '',
  },
  {
    media: image7,
    title: '',
  },
];

const MobileSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true, // Enable fade transition
    cssEase: 'ease-in-out', // Smooth fading effect
  };

  return (
    <div className="w-full h-screen relative">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Conditional rendering for video or image */}
            {slide.media.endsWith('.mp4') ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full brightness-75"
                style={{
                  objectFit: isMobile ? 'cover' : 'cover', // Ensure video covers full screen
                }}
              >
                <source src={slide.media} type="video/mp4" />
                {/* Fallback content for unsupported browsers */}
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={slide.media}
                alt="Slide"
                className="object-cover w-full h-full brightness-75"
                style={{
                  objectFit: isMobile ? 'cover' : 'cover', // Ensure image covers full screen
                }}
              />
            )}

            {/* Overlay content */}
            {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center p-4 md:p-8 bg-black bg-opacity-20"> */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center text-white text-center p-4 pb-10 bg-black bg-opacity-20">
              <h2 className="text-2xl bg-pink-500 md:text-3xl font-poppins font-bold mb-4">{slide.title}</h2>

              <div className="flex justify-center space-x-8 mb-24">
                {/* Learn More Button */}
                <a
                  href="/about"
                  className="inline-block font-bold py-3 px-6 bg-pink-500 rounded-lg shadow-md hover:bg-blue-600 transform transition duration-300"
                >
                  Learn More
                </a>

                {/* Contact Us Button */}
                <a
                  href="/contact"
                  className="inline-block font-bold py-3 px-6 bg-pink-500 rounded-lg shadow-md hover:bg-blue-600 transform transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileSlider;



// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';

// import video1 from '../assets/projects/vid.mp4';
// import video2 from '../assets/projects/vid1.mp4';
// import video3 from '../assets/projects/vid.mp4';
// import video4 from '../assets/projects/video3.mp4';
// import video5 from '../assets/projects/video4.mp4';
// import video6 from '../assets/projects/vid.mp4';
// import video7 from '../assets/projects/vid1.mp4';
// import video8 from '../assets/projects/vid5.mp4';

// const sliderData = [
//   {
//       video: video1,
//       title: 'Intelligent Systems Limited (ISL) ',
//       // description: '',
//     },  
//     {
//        video: video2,
//       title: 'Electrical and Systems Engineering company',
//       // description: '',
//     },
//     {
//        video: video3,
//       title: 'Electrical and Systems Engineering company',
//       // description: '',
//     },
//     {
//        video: video4,
//       title: 'Intelligent Systems Limited (ISL) ',
//       // description: '',
//     },
//     {
//        video: video5,
//       title: 'Intelligent Systems Limited (ISL) ',
//       // description: '',
//     },
//     {
//        video: video6,
//       title: 'Electrical and Systems Engineering company',
//       // description: '',
//     },
//     {
//        video: video7,
//       title: 'Electrical and Systems Engineering company',
//       // description: '',
//     },
//     {
//        video: video8,
//       title: 'Intelligent Systems Limited (ISL)',
//       // description: '',
//     },
// ];
// const MobileSlider = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     fade: true, // Enable fade transition
//     cssEase: 'ease-in-out', // Smooth fading effect
//   };

//   return (
//     <div className="w-full h-screen relative">
//       <Slider {...settings}>
//         {sliderData.map((slide, index) => (
//           <div key={index} className="relative w-full h-screen">
//             {/* Video Background */}
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="object-cover w-full h-full brightness-75"
//               style={{
//                 objectFit: isMobile ? 'cover' : 'cover', // Ensure video covers full screen
//               }}
//             >
//               <source src={slide.video} type="video/mp4" />
//               {/* Fallback content for unsupported browsers */}
//               Your browser does not support the video tag.
//             </video>

//             {/* Overlay content */}
//             <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center p-4 md:p-8 bg-black bg-opacity-20">
//               <h2 className="text-2xl bg-slate-700 md:text-3xl font-poppins font-bold mb-4">{slide.title}</h2>
//               {/* <p className="text-sm md:text-lg">{slide.description}</p> */}

//               <div className="flex justify-center space-x-8">
//           {/* Learn More Button */}
//           <a
//             href="/about"
//             className="inline-block text-slate-700 font-bold py-3 px-6 bg-blue-400 rounded-lg shadow-md hover:bg-blue-600 transform transition duration-300"
//           >
//             Learn More
//           </a>

//           {/* Contact Us Button */}
//           <a
//             href="/contact"
//             className="inline-block text-slate-700 font-bold py-3 px-6 bg-blue-400 rounded-lg shadow-md hover:bg-blue-600 transform transition duration-300"
//           >
//             Contact Us
//           </a>
//         </div>


//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default MobileSlider;