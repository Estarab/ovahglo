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
    link: '/web-development',  // Link to the Web Development detailed page
  },
  {
    title: 'Application Development',
    description:
      'We specialize in developing custom applications that cater to your specific business needs. Whether it’s a mobile app for your customers or an enterprise application, our development team works closely with you to build user-friendly, scalable solutions.',
    icon: <FaMobileAlt className="text-4xl text-blue-600" />,
    image: appDevelopmentImg,
    link: '/app-development',  // Link to the App Development detailed page
  },
  {
    title: 'School Management Systems',
    description:
      'Simplify the complexities of school administration with our fully integrated school management systems. Features like student registration, attendance tracking, grade management, and communication tools ensure smooth operations.',
    icon: <FaSchool className="text-4xl text-blue-600" />,
    image: schoolManagementImg,
    link: '/management-systems',  // Link to the School Management detailed page
  },
  {
    title: 'Hotel Management Systems',
    description:
      'We provide tailored hotel management systems to streamline reservations, room management, billing, and more. Our solution enhances the guest experience and improves operational efficiency for hotel managers.',
    icon: <FaHotel className="text-4xl text-blue-600" />,
    image: hotelManagementImg,
    link: '/management-systems',  // Link to the Hotel Management detailed page
  },
  {
    title: 'Hospital Management Systems',
    description:
      'Our hospital management systems help healthcare providers manage patient data, appointments, billing, and inventory. With a secure interface and data management, we empower hospitals to offer better care and seamless operations.',
    icon: <FaHospital className="text-4xl text-blue-600" />,
    image: hospitalManagementImg,
    link: '/management-systems',  // Link to the Hospital Management detailed page
  },
  {
    title: 'Custom Software Development',
    description:
      'We offer custom software development services to meet the unique needs of your business. From enterprise solutions to standalone apps, we deliver software that solves your problems and grows with your organization.',
    icon: <FaCogs className="text-4xl text-blue-600" />,
    image: customSoftwareImg,
    // link: '/custom-software',  // Link to the Custom Software detailed page
  },
];

const OurServicesComp = () => {
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
              <a
                href={service.link}
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesComp;



// import React from 'react';
// import { FaDesktop, FaMobileAlt, FaSchool, FaHotel, FaHospital, FaCogs } from 'react-icons/fa';

// // Importing images from the assets folder
// import webDevelopmentImg from '../assets/web.jpg';
// import appDevelopmentImg from '../assets/app2.jpg';
// import schoolManagementImg from '../assets/school.jpg';
// import hotelManagementImg from '../assets/hotel.jpg';
// import hospitalManagementImg from '../assets/hospital.jpg';
// import customSoftwareImg from '../assets/custom.jpg';

// const services = [
//   {
//     title: 'Web Development',
//     description:
//       'We design and develop high-quality, scalable websites that engage users and convert visitors into customers. Our web solutions are responsive, ensuring optimal performance across devices, from desktops to mobile phones.',
//     icon: <FaDesktop className="text-4xl text-blue-600" />,
//     image: webDevelopmentImg,
//   },
//   {
//     title: 'Application Development',
//     description:
//       'We specialize in developing custom applications that cater to your specific business needs. Whether it’s a mobile app for your customers or an enterprise application, our development team works closely with you to build user-friendly, scalable solutions.',
//     icon: <FaMobileAlt className="text-4xl text-blue-600" />,
//     image: appDevelopmentImg,
//   },
//   {
//     title: 'School Management Systems',
//     description:
//       'Simplify the complexities of school administration with our fully integrated school management systems. Features like student registration, attendance tracking, grade management, and communication tools ensure smooth operations.',
//     icon: <FaSchool className="text-4xl text-blue-600" />,
//     image: schoolManagementImg,
//   },
//   {
//     title: 'Hotel Management Systems',
//     description:
//       'We provide tailored hotel management systems to streamline reservations, room management, billing, and more. Our solution enhances the guest experience and improves operational efficiency for hotel managers.',
//     icon: <FaHotel className="text-4xl text-blue-600" />,
//     image: hotelManagementImg,
//   },
//   {
//     title: 'Hospital Management Systems',
//     description:
//       'Our hospital management systems help healthcare providers manage patient data, appointments, billing, and inventory. With a secure interface and data management, we empower hospitals to offer better care and seamless operations.',
//     icon: <FaHospital className="text-4xl text-blue-600" />,
//     image: hospitalManagementImg,
//   },
//   {
//     title: 'Custom Software Development',
//     description:
//       'We offer custom software development services to meet the unique needs of your business. From enterprise solutions to standalone apps, we deliver software that solves your problems and grows with your organization.',
//     icon: <FaCogs className="text-4xl text-blue-600" />,
//     image: customSoftwareImg,
//   },
// ];

// const OurServicesComp = () => {
//   return (
//     <section className="py-16 bg-white" id="our-services">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-blue-600 mb-8">Our Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-blue-50 p-6 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
//             >
//               <div className="mb-4 flex justify-center">{service.icon}</div>
//               <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
//               <p className="text-gray-600 mb-6">{service.description}</p>
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-48 object-cover rounded-xl transition-all duration-300 hover:opacity-80"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServicesComp;
