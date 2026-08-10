import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-12 text-blue-900">Our Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         {/* One Pager Package */}
<div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
  <h3 className="text-2xl font-semibold mb-4">Single-Page Site</h3>
  <p className="text-lg mb-4">K2,500</p>
  <p className="text-gray-200 mb-6">One-page site featuring intro, about, offering, and contact sections.</p>
  <table className="w-full text-gray-200 mb-6 border-collapse border border-gray-300">
    <tbody>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Intro, About, Offering, Contact</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Simple Information Website</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Domain & Hosting: Free for one year</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Time spent: 2 Days</td>
      </tr>
    </tbody>
  </table>
  <a href="/get-started" className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold">
    Get Started
  </a>
</div>


         {/* Basic Website Package */}
<div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
  <h3 className="text-2xl font-semibold mb-4">Basic Website</h3>
  <p className="text-lg mb-4">K3,500</p>
  <p className="text-gray-200 mb-6">Includes a 4-page website with basic features.</p>
  <table className="w-full text-gray-200 mb-6 border-collapse border border-gray-300">
    <tbody>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">4 Pages (Home, About, Product/Services, Contact)</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Simple Information Website</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Domain & Hosting: Free for one year</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Time spent: 5 Days</td>
      </tr>
    </tbody>
  </table>
  <a href="/get-started" className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold">
    Get Started
  </a>
</div>


         {/* Standard Website Package */}
<div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
  <h3 className="text-2xl font-semibold mb-4">Standard Website</h3>
  <p className="text-lg mb-4">K5,500</p>
  <p className="text-gray-200 mb-6">Includes up to 8 pages with extra functionality like booking, signin and signup forms, blog and appointments.</p>
  <table className="w-full text-gray-200 mb-6 border-collapse border border-gray-300">
    <tbody>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Up to 8 Pages</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Extra Functionality (Booking, Sign-in/Signup Forms, Blog, Appointments)</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Domain & Hosting: Free for one year</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Time spent: 10 Days</td>
      </tr>
    </tbody>
  </table>
  <a href="/get-started" className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold">
    Get Started
  </a>
</div>


        

<div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
  <h3 className="text-2xl font-semibold mb-4">Premium Website</h3>
  <p className="text-lg mb-4">K7,500</p>
  <p className="text-gray-200 mb-6">Complete website with e-commerce integration and advanced functionalities.</p>
  <table className="w-full text-gray-200 mb-6 border-collapse border border-gray-300">
    <tbody>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Up to 15 Pages</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">E-commerce, Membership, Blog</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Extra Functionality (Bookings, SignUps, Appointments, Payments)</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Domain & Hosting: Free for one year</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td className="py-2 px-4">Time spent: 14 Days</td>
      </tr>
    </tbody>
  </table>
  <a href="/get-started" className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold">
    Get Started
  </a>
</div>


         
        </div>
         {/* Hosting and Maintenance Information */}
         <div className="bg-white mt-8 text-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Domain, Hosting & Maintenance</h3>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center text-gray-700"><FaCheckCircle className="text-blue-600 mr-2" /> Domain and Hosting Yearly Fee: K2,500 - Free for the first year</li>
              <li className="flex items-center text-gray-700"><FaCheckCircle className="text-blue-600 mr-2" /> 4x Monthly Maintenance: K1,200/month - Regular updates and fixes four times a month.</li>
              <li className="flex items-center text-gray-700"><FaCheckCircle className="text-blue-600 mr-2" /> 8x Monthly Maintenance: K1,800/month - More frequent updates with eight checks per month.</li>
              <li className="flex items-center text-gray-700"><FaCheckCircle className="text-blue-600 mr-2" /> 3x Quarterly Maintenance: K1,600/quarter - A quarterly plan with three maintenance checks during the year.</li>
              <li className="flex items-center text-gray-700"><FaCheckCircle className="text-blue-600 mr-2" /> 6x Quarterly Maintenance: K2,500/quarter  - A more comprehensive quarterly plan with six checks in a year.</li>
            </ul>
            {/* <a href="/maintenance" className="text-yellow-400 hover:text-yellow-500 font-semibold">Learn More about our Hosting & Maintenance</a> */}
            <a href="/maintenance" className=" text-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl hover:text-white transition-all duration-300 ease-in-out font-semibold lg:hidden">
            Learn More
</a>
            <a href="/maintenance" className=" text-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl hover:text-white transition-all duration-300 ease-in-out font-semibold hidden md:inline-block">
            Learn More about our Hosting & Maintenance
</a>
          </div>
      </div>
    </section>
  );
};

export default Pricing;



// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const Pricing = () => {
//   return (
//     <section id="pricing" className="py-16 bg-gray-50">
//       <div className="container mx-auto text-center px-4 md:px-8">
//         <h2 className="text-3xl font-semibold mb-12 text-blue-900">Our Packages</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Basic Package */}
//           <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
//             <h3 className="text-2xl font-semibold mb-4">Basic Package</h3>
//             <p className="text-lg mb-4">K3,500</p>
//             <p className="text-gray-200 mb-6">Includes a 4-page website with basic features.</p>
//             <ul className="list-none space-y-3 mb-6">
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> 4 Pages</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Basic Design</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Mobile-Friendly</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Basic SEO</li>
//             </ul>
//             <a href="#contact" className="text-yellow-400 hover:text-yellow-500 font-semibold">Get Started</a>
//           </div>
          
//           {/* Standard Package */}
//           <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
//             <h3 className="text-2xl font-semibold mb-4">Standard Package</h3>
//             <p className="text-lg mb-4">K5,000</p>
//             <p className="text-gray-200 mb-6">Includes 5 pages with custom features and SEO optimization.</p>
//             <ul className="list-none space-y-3 mb-6">
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> 5 Pages</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Custom Features</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> SEO Optimization</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Social Media Integration</li>
//             </ul>
//             <a href="#contact" className="text-yellow-400 hover:text-yellow-500 font-semibold">Get Started</a>
//           </div>
          
//           {/* Premium Package */}
//           <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
//             <h3 className="text-2xl font-semibold mb-4">Premium Package</h3>
//             <p className="text-lg mb-4">K7,000</p>
//             <p className="text-gray-200 mb-6">Complete website with e-commerce integration and digital marketing campaign.</p>
//             <ul className="list-none space-y-3 mb-6">
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> 10 Pages</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> E-commerce Integration</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Digital Marketing</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Premium SEO</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> 24/7 Support</li>
//             </ul>
//             <a href="#contact" className="text-yellow-400 hover:text-yellow-500 font-semibold">Get Started</a>
//           </div>

//           {/* Ultimate Package (Extra Package) */}
//           <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
//             <h3 className="text-2xl font-semibold mb-4">Ultimate Package</h3>
//             <p className="text-lg mb-4">K10,000</p>
//             <p className="text-gray-200 mb-6">The most comprehensive package, including all features and additional customizations.</p>
//             <ul className="list-none space-y-3 mb-6">
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> 15 Pages</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Advanced Custom Features</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Full E-commerce Functionality</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Extensive Digital Marketing</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Custom Branding</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Premium Support</li>
//               <li className="flex items-center text-gray-200"><FaCheckCircle className="text-green-500 mr-2" /> Monthly Analytics Report</li>
//             </ul>
//             <a href="#contact" className="text-yellow-400 hover:text-yellow-500 font-semibold">Get Started</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;




// import React from 'react';

// const Pricing = () => {
//   return (
//     <section id="pricing" className="py-16 bg-white">
//       <div className="container mx-auto text-center px-4 md:px-8">
//         <h2 className="text-3xl font-semibold mb-8">Our Packages</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Basic Package</h3>
//             <p className="text-lg mb-4">K3,500</p>
//             <p className="text-gray-700 mb-4">Includes a 4-page website with basic features.</p>
//             <a href="#contact" className="text-yellow-500 hover:text-yellow-600">Get Started</a>
//           </div>
//           <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Standard Package</h3>
//             <p className="text-lg mb-4">K5,000</p>
//             <p className="text-gray-700 mb-4">Includes 5 pages with custom features and SEO optimization.</p>
//             <a href="#contact" className="text-yellow-500 hover:text-yellow-600">Get Started</a>
//           </div>
//           <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Premium Package</h3>
//             <p className="text-lg mb-4">K7,000</p>
//             <p className="text-gray-700 mb-4">Complete website with e-commerce integration and digital marketing campaign.</p>
//             <a href="#contact" className="text-yellow-500 hover:text-yellow-600">Get Started</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
