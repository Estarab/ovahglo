import React from 'react';
import { FaGift, FaPrint, FaLayerGroup, FaFileAlt } from 'react-icons/fa'; // FaCog for gear, FaDesktop for screen, FaBolt for electrical
import { motion } from 'framer-motion'; // For adding moving animations
import plcImage from '../assets/services/branding.jpg'; // Replace with actual image path
import mccImage from '../assets/services/signage.jpg'; // Replace with actual image path
import scadaImage from '../assets/services/printing.jpg'; // Replace with actual image path
import integratedPlant from '../assets/services/commercialprint.jpg'; // Replace with actual image path

const SystemsComp = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl text-pink-500 font-bold text-center mb-2">WHAT WE DO
</h1>
      <h2 className="text-xl text-white font-semibold text-center mb-2">We Design, Engineer And Build The Following Systems Primarily (But Not
Exclusively) Based On Siemens Components
</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* PLC Systems Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <img src={plcImage} alt="PLC System" className="w-full h-48 object-cover rounded-lg mb-4" />
            <motion.div
              animate={{ rotate: [0, 360] }} // Spinning effect around its center
              transition={{ repeat: Infinity, duration: 4 }} // Continuous rotation every 4 seconds
              className="mx-auto mb-4 inline-block" // Ensuring the icon is centered
            >
              <FaGift className="text-5xl text-pink-500" /> {/* Gear icon for automation */}
            </motion.div>
            <h3 className="text-2xl text-pink-500 font-semibold mb-2">Creative Branding of Corporate Gifts</h3>
            {/* <p></p> */}
          </div>
        </div>

        {/* SCADA Systems Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <img src={scadaImage} alt="SCADA System" className="w-full h-48 object-cover rounded-lg mb-4" />
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mx-auto mb-4 inline-block" // Ensuring the icon is centered
            >
              <FaPrint className="text-4xl text-pink-500" /> {/* Desktop icon for SCADA */}
            </motion.div>
            <h3 className="text-2xl text-pink-500 font-semibold mb-2">Large Format Printing</h3>
            {/* <p>We provide integrated SCADA systems based on a variety of platforms but primarily siemens hmi and pc based scada Using the wincc platform in its various forms: wincc advanced and wincc professional as
Well as the classic platforms: WINCC flexible and WINCC SCADA
.</p> */}
          </div>
        </div>

        {/* MCC and VSD Systems Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <img src={mccImage} alt="MCC and VSD Systems" className="w-full h-48 object-cover rounded-lg mb-4" />
            <motion.div
              animate={{ rotate: [0, 15, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mx-auto mb-4 inline-block" // Ensuring the icon is centered
            >
              <FaLayerGroup className="text-5xl text-pink-500" /> {/* Lightning bolt icon for electrical */}
            </motion.div>
            <h3 className="text-2xl text-pink-500 font-semibold mb-2">3D Signage</h3>
            {/* <p>We build mccs to customer specifications using type tested modular enclosures.</p> */}
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <img src={integratedPlant} alt="MCC and VSD Systems" className="w-full h-48 object-cover rounded-lg mb-4" />
            <motion.div
              animate={{ rotate: [0, 15, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mx-auto mb-4 inline-block" // Ensuring the icon is centered
            >
              <FaFileAlt className="text-5xl text-pink-500" /> {/* Lightning bolt icon for electrical */}
            </motion.div>
            <h3 className="text-2xl text-pink-500 font-semibold mb-2">Commercial Printing</h3>
            {/* <p>Include PLC Control, Motor Control Centres and SCADA.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemsComp;



// import React from 'react';
// import { FaCog, FaDesktop, FaBolt } from 'react-icons/fa'; // FaCog for gear, FaDesktop for screen, FaBolt for electrical
// import { motion } from 'framer-motion'; // For adding moving animations
// import plcImage from '../assets/projects/logo.jpeg'; // Replace with actual image path
// import mccImage from '../assets/projects/logo.jpeg'; // Replace with actual image path
// import scadaImage from '../assets/projects/logo.jpeg'; // Replace with actual image path

// const SystemsComp = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-4xl font-semibold text-center mb-6">Automation Systems We Design, Engineer, and Build</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* PLC Systems Section */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <div className="text-center">
//             <img src={plcImage} alt="PLC System" className="w-full h-48 object-cover rounded-lg mb-4" />
//             <motion.div
//               animate={{ rotate: [0, 360] }} // Spinning effect around its center
//               transition={{ repeat: Infinity, duration: 4 }} // Continuous rotation every 4 seconds
//               className="mx-auto mb-4 inline-block"
//             >
//               <FaCog className="text-6xl text-blue-600" /> {/* Gear icon for automation */}
//             </motion.div>
//             <h3 className="text-2xl font-semibold mb-2">PLC Based Automation</h3>
//             <p>We design and engineer PLC-based automation systems using Siemens S7-1200, S7-1500, S7-300, and S7-400 families of PLC components.</p>
//           </div>
//         </div>

//         {/* SCADA Systems Section */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <div className="text-center">
//             <img src={scadaImage} alt="SCADA System" className="w-full h-48 object-cover rounded-lg mb-4" />
//             <motion.div
//               animate={{ x: [0, -10, 0], opacity: [1, 0.5, 1] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="mx-auto mb-4"
//             >
//               <FaDesktop className="text-6xl text-blue-600" /> {/* Desktop icon for SCADA */}
//             </motion.div>
//             <h3 className="text-2xl font-semibold mb-2">SCADA Systems</h3>
//             <p>We provide integrated SCADA systems based on Siemens WinCC platforms (Advanced, Professional, Flexible, and SCADA Classic).</p>
//           </div>
//         </div>

//         {/* MCC and VSD Systems Section */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <div className="text-center">
//             <img src={mccImage} alt="MCC and VSD Systems" className="w-full h-48 object-cover rounded-lg mb-4" />
//             <motion.div
//               animate={{ rotate: [0, 5, 0], opacity: [1, 0.5, 1] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="mx-auto mb-4"
//             >
//               <FaBolt className="text-6xl text-blue-600" /> {/* Lightning bolt icon for electrical */}
//             </motion.div>
//             <h3 className="text-2xl font-semibold mb-2">MCC and VSD Systems</h3>
//             <p>We design and build Motor Control Centres (MCCs) and VSD-based systems using modular enclosures tailored to customer specifications.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SystemsComp;



