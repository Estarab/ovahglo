import React from 'react';
import { FaTools, FaCode, FaRegBuilding, FaCog, FaNetworkWired } from 'react-icons/fa';

const ServicesComp = () => {
  // Courses for Customer Training
  const courses = [
    { name: "PLC Maintenance Courses", icon: <FaTools /> },
    { name: "PLC Programming Courses", icon: <FaCode /> },
    // { name: "Introduction to the TIA Portal", icon: <FaLaptop /> },
    { name: "WINCC SCADA Courses", icon: <FaRegBuilding /> },
    { name: "Drives Courses", icon: <FaCog /> },
  ];

  // Services for Maintenance Support
  const supportServices = [
    { name: "PLC Control Systems", icon: <FaTools />   },
    { name: "SCADA Systems", icon: <FaNetworkWired />  },
    { name: "Drived Systems", icon: <FaNetworkWired />  },
    { name: "Integrated Systems (PLC, Motor Contol Centres, SCADA)", icon: <FaNetworkWired />  },
  ];

  return (
    
    <div className=" min-h-screen p-2">
      <h2 className="text-3xl text-center font-bold text-pink-500 font-bold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          WHAT WE DO
        </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Customer Training Table (Left) */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-4 text-center">
            Customer Training
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            ISL is a certified Siemens SITRAIN® training centre. We are certified to train customers in the following courses:
          </p>
          
          <ul className="space-y-4 mb-6">
            {courses.map((course, index) => (
              <li key={index} className="flex items-center space-x-3 text-lg text-gray-700">
                <span className="text-xl text-blue-400">{course.icon}</span>
                <span>{course.name}</span>
              </li>
            ))}
           
          </ul>

          {/* <p className="text-lg text-gray-600 text-center mb-4">
            DETAILED LIST IS IN THE COURSE SCHEDULE
          </p> */}
          
          {/* <div className="flex justify-center">
            <a
              href="/course-schedule.pdf"
              download
              className="bg-slate-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Download COURSE SCHEDULE
            </a>
          </div> */}
        </div>

        {/* Maintenance Support Services Table (Right) */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-4 text-center">
            Maintenance Support Services
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            We offer technical support for all our installed base of systems as well as 3rd party systems based on:
          </p>
          
          <ul className="space-y-4">
            {supportServices.map((service, index) => (
                
                <li key={index} className="flex items-center space-x-3 text-lg text-gray-700">
                <span className="text-xl text-blue-400">{service.icon}</span>
                <span>{service.name}</span>
              </li>
            ))}
          </ul>

          {/* <p className="text-lg text-gray-600 text-center mt-6">
            Need Support? Contact us for more information.
          </p> */}
        </div>

      </div>
    </div>
  );
};

export default ServicesComp;
