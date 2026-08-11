import React from 'react';

const CompTwo = () => {
  return (
    <section className="w-full bg-slate-700 overflow-hidden">
      <picture className="block w-full">
        
        {/* Mobile image */}
        <source
          media="(max-width: 767px)"
          srcSet="/images/mobileabout.png"
        />

        {/* Desktop image */}
        <img
          src="/images/desktopabout.png"
          alt="Ovahglo - Branding and Technology Company"
          className="block w-full h-auto max-w-full"
        />

      </picture>
    </section>
  );
};

export default CompTwo;

// import React, { useState } from 'react';
// import {
//   FaTools,
//   FaBuilding,
//   FaIndustry,
//   FaHandsHelping,
//   FaCogs,
//   FaMoneyBillWave
// } from 'react-icons/fa';

// const CompTwo = () => {
//   const [showMore, setShowMore] = useState(false);

//   const fullText = `We are a locally established, creative-focused branding and technology company that specializes in the development and production of corporate gifts, commercial printing, signage, and large format printing. We also provide technology solutions such as website and mobile application development, Point of Sale (POS) systems, school and business management systems, and many more customized software solutions. With a strong commitment to quality, creativity, and customer satisfaction, we ensure that every project is professionally executed and delivered on time, every time. Our goal is to combine creativity and technology to help businesses build strong brands, improve their operations, and grow in the digital age.`;

//   const previewText = fullText.split(' ').slice(0, 50).join(' ');

//   return (
//     <section className="text-white bg-slate-700 py-12 px-6">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Section Title */}
//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           WHO WE ARE
//         </h2>

//         {/* Description */}
//         <div className="text-lg font-semibold mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//           <p>
//             {showMore ? fullText : `${previewText}...`}
//           </p>

//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="mt-3 text-pink-500 font-bold hover:text-blue-600 transition duration-300"
//           >
//             {showMore ? 'Read Less' : 'Read More'}
//           </button>
//         </div>

//         {/* Vision */}
//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           VISION
//         </h2>

//         <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//           Leaders in Technology Solutions, Branding, Signage and Printing
//           Driven by a Passion for Excellence and Innovation.
//         </p>

//         {/* Mission */}
//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           MISSION
//         </h2>

//         <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//           We provide unique, high-quality technology solutions, branding, signage and printing. We endeavor to exceed customer expectations
//           through creativity, innovation, reliability, and professional service.
//         </p>

//       </div>
//     </section>
//   );
// };

// export default CompTwo;



// import React from 'react';
// import { FaTools, FaBuilding, FaIndustry, FaHandsHelping, FaCogs,FaMoneyBillWave } from 'react-icons/fa'; // Icons import


// const CompTwo = () => {
//   return (
//     <section className="text-white bg-slate-700 py-12 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Section Title */}
//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           WHO WE ARE
//         </h2>

//         {/* Description */}
//         {/* <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//         We are a locally established, creative focused brannding and technology company that specializes in the development and production of corporate gits, commercial printing, signage, and large format printing. We also provide technology solutions such as website and mobile application development, Point of Sale (POS) systems, school and business management systems, and many more customized software solutions. With a strong commitment to quality, creativity, and customer satisfaction, we ensure that every project is professionally executed and delivered on time, every time. Our goal is to combine creativity and technology to help businesses build strong brands, improve their operations, and grow in the digital age.
//         </p> */}
        

//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           VISION
//         </h2>
//          <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//        Leaders in Branding, Signage, and Printing Services Driven by a Passion for Excellence
//         </p>

//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           MISION
//         </h2>
//          <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//        We Provide unique, high quality branding , signage and printing services. We endeavor to exceed customer expectations.
//         </p>
//         {/* <h2 className="text-3xl text-pink-500 font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
//           WHAT WE DO
//         </h2> */}

        

//         {/* What We Do (Cards Section) */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"> */}
//           {/* Card 1 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-3s">
//             <div className="flex items-center justify-center mb-4">
//               <FaTools className="text-5xl text-blue-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Systems Integrator</h3>
//             <p>We design, build, and install automation and low voltage systems.</p>
//           </div> */}

//           {/* Card 2 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-4s">
//             <div className="flex items-center justify-center mb-4">
//               <FaBuilding className="text-5xl text-green-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Motor Control Centres</h3>
//             <p>We build motor control centres with conventional and unconventional controls.</p>
//           </div> */}

//           {/* Card 3 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-5s">
//             <div className="flex items-center justify-center mb-4">
//               <FaIndustry className="text-5xl text-yellow-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Siemens Industry Products</h3>
//             <p>We supply and support (backed up with Siemens training) a wide range of Siemens industry products.</p>
//           </div> */}

//           {/* Card 4 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-6s">
//             <div className="flex items-center justify-center mb-4">
//               <FaHandsHelping className="text-5xl text-red-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Product Channel Partner</h3>
//             <p>We are a certified Siemens product channel partner.</p>
//           </div> */}

//           {/* Card 5 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-7s">
//             <div className="flex items-center justify-center mb-4">
//               <FaCogs className="text-5xl text-purple-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Customer Training</h3>
//             <p>We are a Siemens SITRAIN® training partner. We conduct customer training on and off-site in various Siemens (SITRAIN®) automation and drives courses.</p>
//           </div>
//         </div> */}

      

//         {/* Our Values Section */}
//         {/* <div className="mt-8">
//           <h3 className="text-2xl font-semibold text-blue-400 mb-2 animate__animated animate__fadeIn animate__delay-8s">
//             Our Values
//           </h3>
//           <ul className="list-disc text-left space-y-4 text-lg animate__animated animate__fadeIn animate__delay-9s">
//             <div className="flex items-center justify-center ">
//             <FaMoneyBillWave className="text-3xl text-blue-400" />
//             <p>Giving customers value for money in all that we do, and continuing product and systems support.</p>
//             </div>
//             <div className="flex items-center justify-center">
//             <FaHandsHelping className="text-3xl text-blue-400" />
//             <p>Being socially responsible: helping out various tertiary education institutions by product donations and taking on students for vacation work.</p>
//             </div>
           
          
//           </ul>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default CompTwo;




// import React from 'react';
// import { FaTools, FaBuilding, FaIndustry, FaHandsHelping, FaCogs } from 'react-icons/fa'; // Icons import
// import image1 from '../assets/Website Header Images/Indeni.jpg';
// import image2 from '../assets/other imgs/widerange.jpg';
// import image3 from '../assets/other imgs/Classic PLC under Assembly.jpg';
// import image4 from '../assets/other imgs/widerange.jpg';
// import image5 from '../assets/other imgs/Workshop.jpg';

// const CompTwo = () => {
//   return (
//     <section className="text-white bg-slate-700 py-12 px-6 ">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Section Title */}
//         <h2 className="text-3xl text-blue-700 font-bold  mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           About Us
//         </h2>
        
//         {/* Description */}
//         <p className="text-lg mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//           Intelligent Systems Limited (ISL) is an Electrical and Systems Engineering company. We specialize in the fields of industrial automation, motor drives, process instrumentation, and low voltage systems, products, and engineering.
//         </p>

//         {/* What We Do (Cards Section) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//           {/* Card 1 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-3s">
//             <img src={image1} alt="System Integrator" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Systems Integrator</h3>
//             <p>We design, build, and install automation and low voltage systems.</p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-4s">
//             <img src={image2} alt="Motor Control Centres" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Motor Control Centres</h3>
//             <p>We build motor control centres (mcc) equiped with conventional controls as well as Variable frquency drives
// .</p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-5s">
//             <img src={image3} alt="Siemens Products" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Siemens Industry Products</h3>
//             <p>We supply and support (backed up with siemens training) a wide range of siemens industry Products</p>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-6s">
//             <img src={image4} alt="Training & Support" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Product Channel Partner</h3>
//             <p>We are a certified siemens product channel partner.</p>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-7s">
//             <img src={image5} alt="Customer Support" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Customer Training</h3>
//             <p>We are a siemens sitrain® training partner. We conduct customer training on and off site in Various siemens (sitrain®) automation and drives courses.
// </p>
//           </div>
//         </div>

//         {/* Our Values Section */}
//         <div className="mt-8">
//           <h3 className="text-2xl font-semibold text-blue-400 mb-4 animate__animated animate__fadeIn animate__delay-8s">
//             Our Values
//           </h3>
//           <ul className="list-disc text-left space-y-4  text-lg animate__animated animate__fadeIn animate__delay-9s">
//             <li>Giving customers value for money in all that we do, and continuing product and systems support.</li>
//             <li>Being socially responsible: helping out various tertiary education institutions by product Donations and taking on student on vacational 
// .</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompTwo;
