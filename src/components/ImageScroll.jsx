import React from 'react';
import heroImage1 from '../assets/services/branding.jpg';
import heroImage2 from '../assets/services/commercialprint.jpg';
import heroImage3 from '../assets/services/signage.jpg';
import heroImage4 from '../assets/services/printing.jpg';
import heroImage5 from '../assets/services/branding.jpg';
import heroImage6 from '../assets/services/commercialprint.jpg';
import heroImage7 from '../assets/services/signage.jpg';
import heroImage8 from '../assets/services/printing.jpg';

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
  heroImage7,
  heroImage8,
];

const ImageScroll = () => {
  return (
    <section className="relative py-0">
      <div className="absolute inset-0"></div> {/* 40% opacity for overlay */}

      <div className="overflow-hidden relative z-10">
        <div className="flex animate-scrollImagesDesktop md:animate-scrollImagesMobile">
          {heroImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-48 mx-4">
              <img
                src={image}
                alt={`Scroll image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageScroll;





// import React from 'react';
// import heroImage1 from '../assets/product imgs/20250312_162335.png';
// import heroImage2 from '../assets/product imgs/IMG_20250371_163219824.png';
// import heroImage3 from '../assets/product imgs/SIEMENS (INNOMOTICS) VARIABLE SPEED DRIVES AND MOTORS.png';
// import heroImage4 from '../assets/product imgs/SIEMENS LOW VOLTAGE SWITCHGEAR.jpeg';
// import heroImage5 from '../assets/product imgs/SIEMENS PLC AUTOMATION PRODUCTS.png';
// import heroImage6 from '../assets/product imgs/SIEMENS SITRANS PROCESS INSTRUMENTATION.png';
// import heroImage7 from '../assets/other imgs/vent Fan Power.JPG';
// import heroImage8 from '../assets/other imgs/Mini Classic Controllers.jpg';

// const heroImages = [
//   heroImage1,
//   heroImage2,
//   heroImage3,
//   heroImage4,
//   heroImage5,
//   heroImage6,
//   heroImage7,
//   heroImage8,
// ];

// const ImageScroll = () => {
//   return (
//     <section
//       className="relative  py-0"
//       style={{
//         // backgroundImage: `url(${heroImage1})`, // Background image
//         // backgroundSize: 'cover', // Cover the entire section
//         // backgroundPosition: 'center', // Center the image
//       }}
//     >
//       {/* Add an overlay with opacity */}
//       <div className="absolute inset-0 "></div> {/* 40% opacity for overlay */}

//       <div className="overflow-hidden relative z-10">
//         <div className="flex animate-scrollImages">
//           {heroImages.map((image, index) => (
//             <div key={index} className="flex-shrink-0 w-64 h-48 mx-4">
//               <img
//                 src={image}
//                 alt={`Scroll image ${index + 1}`}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageScroll;



