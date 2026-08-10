import React from 'react';
import { FaDesktop, FaMobileAlt, FaSchool, FaHotel, FaHospital, FaCogs } from 'react-icons/fa';

// Importing images from the assets folder
import webDevelopmentImg from '../assets/web.jpg';
import appDevelopmentImg from '../assets/app2.jpg';
import schoolManagementImg from '../assets/school.jpg';
import hotelManagementImg from '../assets/hotel.jpg';
import hospitalManagementImg from '../assets/hospital.jpg';
import customSoftwareImg from '../assets/custom.jpg';

const services = [
  {
    title: 'Web Development',
    description:
      'We design and develop high-quality, scalable websites that engage users and convert visitors into customers. Our web solutions are responsive, ensuring optimal performance across devices, from desktops to mobile phones.',
    icon: <FaDesktop className="text-4xl text-blue-600" />,
    image: webDevelopmentImg,
  },
  {
    title: 'Application Development',
    description:
      'We specialize in developing custom applications that cater to your specific business needs. Whether it’s a mobile app for your customers or an enterprise application, our development team works closely with you to build user-friendly, scalable solutions.',
    icon: <FaMobileAlt className="text-4xl text-blue-600" />,
    image: appDevelopmentImg,
  },
  {
    title: 'School Management Systems',
    description:
      'Simplify the complexities of school administration with our fully integrated school management systems. Features like student registration, attendance tracking, grade management, and communication tools ensure smooth operations.',
    icon: <FaSchool className="text-4xl text-blue-600" />,
    image: schoolManagementImg,
  },
  {
    title: 'Hotel Management Systems',
    description:
      'We provide tailored hotel management systems to streamline reservations, room management, billing, and more. Our solution enhances the guest experience and improves operational efficiency for hotel managers.',
    icon: <FaHotel className="text-4xl text-blue-600" />,
    image: hotelManagementImg,
  },
  {
    title: 'Hospital Management Systems',
    description:
      'Our hospital management systems help healthcare providers manage patient data, appointments, billing, and inventory. With a secure interface and data management, we empower hospitals to offer better care and seamless operations.',
    icon: <FaHospital className="text-4xl text-blue-600" />,
    image: hospitalManagementImg,
  },
  {
    title: 'Custom Software Development',
    description:
      'We offer custom software development services to meet the unique needs of your business. From enterprise solutions to standalone apps, we deliver software that solves your problems and grows with your organization.',
    icon: <FaCogs className="text-4xl text-blue-600" />,
    image: customSoftwareImg,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white" id="our-services">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl transition-all duration-300 hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;





// import React from 'react';

// const Services = () => {
//   return (
//     <section id="services" className="py-16 bg-gray-100">
//       <div className="container mx-auto text-center px-4 md:px-8">
//         <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">Web Development</h3>
//             <p className="text-gray-700">Custom websites that meet your business needs and provide great user experiences.</p>
//           </div>
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">App Development</h3>
//             <p className="text-gray-700">Native and cross-platform mobile apps designed to enhance your business operations.</p>
//           </div>
//           <div className="bg-white shadow-lg p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
//             <p className="text-gray-700">Strategic marketing campaigns to promote your brand and boost online visibility.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
