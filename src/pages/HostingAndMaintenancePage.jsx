import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const HostingAndMaintenancePage = () => {
  const handleClosePage = () => {
    // Handle page closure (could redirect to home or other page)
    window.history.back(); // This will take the user back to the previous page in history
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center mt-2">
      <div className="bg-white w-full md:w-3/4 lg:w-2/3 p-8 rounded-lg shadow-lg relative">
        {/* Close Icon */}
        <button 
          onClick={handleClosePage} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <FaTimes className="h-6 w-6" />
        </button>

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

          {/* Maintenance Package Options */}
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
  );
};

export default HostingAndMaintenancePage;



