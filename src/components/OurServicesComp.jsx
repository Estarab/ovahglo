// import React from 'react';
import React, { useState } from 'react';

import {
  FaPrint,
  FaSign,
  FaPalette,
  FaTshirt,
  FaBuilding,
  FaDesktop,
  FaMobileAlt,
  FaCashRegister,
  FaCogs,
  FaBullhorn,
} from 'react-icons/fa';

import { GiSewingMachine } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Website Development',
    icon: <FaDesktop />,
    link: '/web-development',
  },
  {
    title: 'Designing Large Format',
    icon: <FaPalette />,
  },
  {
    title: 'Signage and Branding',
    icon: <FaSign />,
  },
  {
    title: 'Application Development',
    icon: <FaMobileAlt />,
  },
  {
    title: 'Digital Printing',
    icon: <FaPrint />,
  },
  //  {
  //   title: 'Point of Sale Systems',
  //   icon: <FaCashRegister />,
  // },
  {
  title: 'Point of Sale Systems',
  icon: <FaCashRegister />,
  link: '/pos',
},
  {
    title: 'Litho Printing',
    icon: <FaPrint />,
  },
 
  {
    title: 'DTF Printing',
    icon: <FaPrint />,
  },
  {
    title: 'Embroidery',
    icon: <GiSewingMachine />,
  },
  {
    title: 'Corporate',
    icon: <FaBuilding />,
  },
  {
    title: 'Promotional Wear',
    icon: <FaTshirt />,
  },
  {
    title: 'Screen Printing',
    icon: <FaPrint />,
  },
  {
    title: 'Heat Transfer',
    icon: <FaTshirt />,
  },
 

  {
    title: 'Management Systems',
    icon: <FaCogs />,
  },
  {
    title: 'Digital Marketing',
    icon: <FaBullhorn />,
  },
];

const OurServicesComp = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? services
    : services.slice(0, 8);

  return (
    <section
      id="our-services"
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        lg:py-24
        bg-slate-950
        text-white
      "
    >

      {/* Background */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_top,#3b0735_0%,#0f172a_40%,#020617_100%)]
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -left-32
          w-[500px]
          h-[250px]
          bg-pink-600/20
          blur-3xl
          rotate-[-15deg]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-20
          -right-32
          w-[400px]
          h-[400px]
          bg-purple-700/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />


      {/* Main Container */}

      <div
        className="
          relative
          z-10
          max-w-[1500px]
          mx-auto
          px-5
          sm:px-8
          md:px-12
        "
      >

        {/* Heading */}

        <div className="text-center mb-14">

          <div className="flex items-center justify-center gap-4 mb-3">

            <div
              className="
                hidden
                sm:block
                w-20
                h-[2px]
                bg-pink-500
              "
            />

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                uppercase
                tracking-tight
              "
            >
              <span className="text-white">
                OUR
              </span>{' '}

              <span className="text-pink-500">
                SERVICES
              </span>
            </h2>

            <div
              className="
                hidden
                sm:block
                w-20
                h-[2px]
                bg-pink-500
              "
            />

          </div>

          <p
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              italic
              text-white/80
            "
          >
            Creative Solutions. Lasting Impressions.
          </p>

          <div className="flex justify-center mt-4">
            <div
              className="
                w-32
                h-[3px]
                bg-pink-500
                rounded-full
              "
            />
          </div>

        </div>


        {/* Services Grid */}

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-x-4
            gap-y-10
            sm:gap-x-6
            sm:gap-y-12
            lg:gap-x-8
            lg:gap-y-14
          "
        >

          {/* {visibleServices.map((service, index) => (

            <div
              key={index}
              className="
                group
                flex
                flex-col
                items-center
                text-center
                cursor-pointer
              "
            > */}
            {services.map((service, index) => (
  <Link
    key={index}
    to={service.link}
    className={`
      group
      flex
      flex-col
      items-center
      text-center
      cursor-pointer

      ${index >= 6 && !showAll ? 'hidden lg:flex' : ''}
      ${index >= 8 && !showAll ? 'lg:hidden' : ''}
    `}
  >

              {/* Icon Circle */}

              <div
                className="
                  relative
                  w-24
                  h-24
                  sm:w-28
                  sm:h-28
                  md:w-32
                  md:h-32
                  lg:w-36
                  lg:h-36
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-white
                  border-[3px]
                  border-pink-500
                  shadow-[0_0_20px_rgba(236,72,153,0.35)]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]
                "
              >

                {/* Outer ring */}

                <div
                  className="
                    absolute
                    -inset-2
                    rounded-full
                    border
                    border-pink-500/40
                    group-hover:border-pink-400
                    transition-all
                    duration-500
                  "
                />

                {/* Second ring */}

                <div
                  className="
                    absolute
                    -inset-4
                    rounded-full
                    border
                    border-pink-500/20
                  "
                />

                {/* Icon */}

                <div
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    text-pink-600
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:text-pink-500
                  "
                >
                  {service.icon}
                </div>

              </div>


              {/* Service Title */}

              <h3
                className="
                  mt-6
                  text-sm
                  sm:text-base
                  md:text-lg
                  lg:text-xl
                  font-bold
                  uppercase
                  leading-tight
                  text-white
                  group-hover:text-pink-500
                  transition-colors
                  duration-300
                  max-w-[180px]
                "
              >
                {service.title}
              </h3>


              {/* Pink Line */}

              <div
                className="
                  mt-3
                  w-8
                  h-[2px]
                  bg-pink-500
                  opacity-70
                  group-hover:w-14
                  transition-all
                  duration-300
                "
              />

            </Link>

          ))}

        </div>


        {/* See More / Show Less Button */}

        <div className="flex justify-center mt-12">

          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="
              px-8
              py-3
              rounded-full
              bg-pink-600
              hover:bg-pink-500
              text-white
              text-lg
              font-bold
              shadow-lg
              shadow-pink-600/30
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            "
          >
            {showAll ? 'Show Less ↑' : 'See More →'}
          </button>

        </div>


        {/* Bottom Branding */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-5
            mt-16
            sm:mt-20
          "
        >

          <div
            className="
              hidden
              sm:block
              w-24
              h-[2px]
              bg-pink-500
            "
          />

          <div
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              italic
              text-white
            "
          >
            Ovahglo!
          </div>

          <div
            className="
              hidden
              sm:block
              w-24
              h-[2px]
              bg-pink-500
            "
          />

        </div>

      </div>

    </section>
  );
};

export default OurServicesComp;

// export default OurServicesComp;


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
//     link: '/web-development',  // Link to the Web Development detailed page
//   },
//   {
//     title: 'Application Development',
//     description:
//       'We specialize in developing custom applications that cater to your specific business needs. Whether it’s a mobile app for your customers or an enterprise application, our development team works closely with you to build user-friendly, scalable solutions.',
//     icon: <FaMobileAlt className="text-4xl text-blue-600" />,
//     image: appDevelopmentImg,
//     link: '/app-development',  // Link to the App Development detailed page
//   },
//   {
//     title: 'School Management Systems',
//     description:
//       'Simplify the complexities of school administration with our fully integrated school management systems. Features like student registration, attendance tracking, grade management, and communication tools ensure smooth operations.',
//     icon: <FaSchool className="text-4xl text-blue-600" />,
//     image: schoolManagementImg,
//     link: '/management-systems',  // Link to the School Management detailed page
//   },
//   {
//     title: 'Hotel Management Systems',
//     description:
//       'We provide tailored hotel management systems to streamline reservations, room management, billing, and more. Our solution enhances the guest experience and improves operational efficiency for hotel managers.',
//     icon: <FaHotel className="text-4xl text-blue-600" />,
//     image: hotelManagementImg,
//     link: '/management-systems',  // Link to the Hotel Management detailed page
//   },
//   {
//     title: 'Hospital Management Systems',
//     description:
//       'Our hospital management systems help healthcare providers manage patient data, appointments, billing, and inventory. With a secure interface and data management, we empower hospitals to offer better care and seamless operations.',
//     icon: <FaHospital className="text-4xl text-blue-600" />,
//     image: hospitalManagementImg,
//     link: '/management-systems',  // Link to the Hospital Management detailed page
//   },
//   {
//     title: 'Custom Software Development',
//     description:
//       'We offer custom software development services to meet the unique needs of your business. From enterprise solutions to standalone apps, we deliver software that solves your problems and grows with your organization.',
//     icon: <FaCogs className="text-4xl text-blue-600" />,
//     image: customSoftwareImg,
//     // link: '/custom-software',  // Link to the Custom Software detailed page
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
//               <a
//                 href={service.link}
//                 className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
//               >
//                 Learn More
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServicesComp;



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
