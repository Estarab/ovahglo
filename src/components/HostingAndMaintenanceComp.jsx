import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const HostingAndMaintanceComp = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-12 text-blue-900">Our Packages</h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Single-Page Site Package */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Single-Page Site</h3>
            <p className="text-lg mb-4">K2,500</p>
            <p className="text-gray-200 mb-6">One-page site featuring intro, about, offering, and contact sections.</p>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Intro, About, Offering, Contact</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Simple Information Website</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Domain & Hosting: Free for one year</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Time spent: 2 Days</li>
            </ul>
            <a href="#contact" className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold">Get Started</a>
          </div>

          {/* Basic Website Package */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Basic Website</h3>
            <p className="text-lg mb-4">K3,500</p>
            <p className="text-gray-200 mb-6">Includes a 4-page website with basic features.</p>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> 4 Pages (Home, About, Product/Services, Contact)</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Simple Information Website</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Domain & Hosting: Free for one year</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Time spent: 5 Days</li>
            </ul>
            <a href="#contact" className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold">Get Started</a>
          </div>

          {/* Standard Website Package */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Standard Website</h3>
            <p className="text-lg mb-4">K5,500</p>
            <p className="text-gray-200 mb-6">Includes up to 8 pages with extra functionality like booking, signin and signup forms, blog and appointments.</p>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Up to 8 Pages</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Extra Functionality (Booking, Sign-in/Signup Forms, Blog, Appointments)</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Domain & Hosting: Free for one year</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Time spent: 10 Days</li>
            </ul>
            <a href="#contact" className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold">Get Started</a>
          </div>

          {/* Premium Website Package */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Premium Website</h3>
            <p className="text-lg mb-4">K7,500</p>
            <p className="text-gray-200 mb-6">Complete website with e-commerce integration and advanced functionalities.</p>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Up to 15 Pages</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> E-commerce, Membership, Blog</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Extra Functionality (Bookings,SignUps, Appointments, Payments)</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Domain & Hosting: Free for one year</li>
              <li className="flex items-center text-gray-200"><FaCheckCircle className="text-white mr-2" /> Time spent: 14 Days</li>
            </ul>
            <a href="/get-started" className="bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 ease-in-out font-semibold">Get Started</a>
          </div>
        </div>

        {/* Hosting & Maintenance Section */}
        <div className="bg-gray-100 min-h-screen flex justify-center items-center mt-16 py-16">
          <div className="bg-white w-full md:w-3/4 lg:w-2/3 p-8 rounded-lg shadow-lg relative">
            <h3 className="text-2xl font-semibold mb-6">Hosting & Maintenance Services</h3>
            <p className="text-lg mb-6">Learn more about our hosting services and maintenance plans to ensure your website runs smoothly and securely.</p>

            {/* Hosting Section */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">What is Hosting?</h4>
              <p className="text-gray-700">Web hosting is the service that allows your website to be accessible via the internet. Think of it as the space where your website lives. When you sign up for web hosting, you're essentially renting space on a server where your website's files, images, content, and data are stored.</p>
              <p className="text-gray-700 mt-4">We offer hosting services with the following benefits:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Fast and reliable uptime</li>
                <li>Secure storage for your website data</li>
                <li>Free hosting for the first year with our packages</li>
              </ul>
            </div>

            {/* Maintenance Section */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Maintenance Packages</h4>
              <p className="text-gray-700 mb-4">Regular maintenance is crucial for keeping your website functional, secure, and up-to-date. Our maintenance plans help you ensure that your website stays operational and performs at its best. Here's a breakdown of our packages:</p>
              <ul className="list-none space-y-4">
                <li className="flex items-center text-gray-700"><FaCheckCircle className="text-green-500 mr-2" /> <strong>4x Monthly Maintenance:</strong> K1,200/month - Regular updates and fixes four times a month.</li>
                <li className="flex items-center text-gray-700"><FaCheckCircle className="text-green-500 mr-2" /> <strong>8x Monthly Maintenance:</strong> K1,800/month - More frequent updates with eight checks per month.</li>
                <li className="flex items-center text-gray-700"><FaCheckCircle className="text-green-500 mr-2" /> <strong>3x Quarterly Maintenance:</strong> K1,600/quarter - A quarterly plan with three maintenance checks during the year.</li>
                <li className="flex items-center text-gray-700"><FaCheckCircle className="text-green-500 mr-2" /> <strong>6x Quarterly Maintenance:</strong> K2,500/quarter - A more comprehensive quarterly plan with six checks in a year.</li>
              </ul>

              <h4 className="text-xl font-semibold mt-6">Why is Maintenance Important?</h4>
              <p className="text-gray-700 mt-4">Website maintenance is essential to keep your website running smoothly, prevent security vulnerabilities, and improve the overall user experience. Regular updates can help:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Ensure your website is secure and protected from hacking attempts.</li>
                <li>Fix bugs and broken links to enhance user experience.</li>
                <li>Optimize your site speed and ensure it works on all devices.</li>
                <li>Stay current with new features and technologies.</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <a href="/get-started" className="text-yellow-500 hover:text-yellow-600 font-semibold text-lg">Get Started with Our Hosting & Maintenance Packages</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingAndMaintanceComp;

