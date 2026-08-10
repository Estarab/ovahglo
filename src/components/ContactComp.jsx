import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import WhatsAppComponent from './WhatsAppComponent';

const ContactComp = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-xl">

      {/* Get in Touch Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-pink-500 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you! Reach out to us through any of the options below.</p>
      </motion.header>

      {/* Table for Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 gap-8">

        {/* Location Details */}
        <motion.div
          className="p-6 bg-slate-700 rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-pink-500 mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-3 text-pink-500" />
            Our Location
          </h2>
          <p className="text-white text-lg leading-relaxed text-left">
          Plot No.2 J Avondale Shopping Complex, Lusaka, Zambia
          </p>
        </motion.div>

        {/* Call Us Section */}
        <motion.div
          className="p-6 bg-slate-700 rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-pink-500 mb-4 flex items-center">
            <FaPhoneAlt className="mr-3 text-pink-500" />
            Call Us On
          </h2>
          <ul className="pl-6 text-white text-sm space-y-2 text-left">
            <p>Phone Numbers</p>
          <li>+260 955 774 867/+260 211 282451</li>
          
            {/* <p>Mobile Number</p>
          <li>+260 967719757</li> */}
          
          </ul>
        </motion.div>

        {/* Email Us Section */}
        <motion.div
          className="p-6 bg-slate-700 rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-pink-500 mb-4 flex items-center">
            <FaEnvelope className="mr-3 text-pink-500" />
            Postal Address:
          </h2>
          <p className="text-white text-sm font-medium text-left">PO BOX 310334</p>
        </motion.div>
      </div>

      {/* Mobile Layout: Stack the sections */}
      <div className="md:hidden flex flex-col items-center space-y-8">
        {/* Location Details */}
        <motion.div
          className="mb-6 p-6 bg-slate-700 rounded-lg shadow-xl w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-3 text-blue-400" />
            Our Location
          </h2>
          <p className="text-white text-lg leading-relaxed text-left">
          Plot No.2 J Avondale Shopping Complex, Lusaka, Zambia
          </p>
        </motion.div>

        {/* Call Us Section */}
        <motion.div
          className="mb-6 p-6 bg-slate-700 rounded-lg shadow-xl w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
            <FaPhoneAlt className="mr-3 text-blue-400" />
            Call Us On
          </h2>
          <ul className="pl-6 text-white text-lg space-y-2 text-left">
          <p>Phone Numbers</p>
          <li>+260 955 774 867/+260 211 282451</li>
          
            {/* <p>Mobile Number</p>
          <li>+260 967719757</li> */}
          </ul>
        </motion.div>

        {/* Email Us Section */}
        <motion.div
          className="mb-6 p-6 bg-slate-700 rounded-lg shadow-xl w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-pink-500 mb-4 flex items-center">
          <FaEnvelope className="mr-3 text-pink-500" />
          Postal Address:
          </h2>
          <p className="text-white text-xl font-medium text-left">PO BOX 310334</p>
        </motion.div>

        
      </div>
      <WhatsAppComponent/>


      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg overflow-hidden shadow-xl mt-10"
      >
        <h2 className="text-4xl font-bold text-pink-500 mb-4 text-center">Directions</h2>
        <iframe
          title="Google Map"
          
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.343120362939!2d28.254220474295423!3d-15.465965214952067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f30070c2edef%3A0x505a2059b1253a9b!2sAB%20Nation%20Tech!5e0!3m2!1sen!2szm!4v1735834934217!5m2!1sen!2szm" 
          // src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.6155853258247!2d28.244032375073605!3d-12.803446187496695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ4JzEyLjQiUyAyOMKwMTQnNDcuOCJF!5e0!3m2!1sen!2szm!4v1743212485264!5m2!1sen!2szm" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.9454168370353!2d28.387435323767363!3d-15.379442162871719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408be08aa45f59%3A0xa4fe1899098522e9!2sJ9CQ%2B4WH%20Avondale%20Shopping%20Complex%2C%20Lusaka!5e0!3m2!1sen!2szm!4v1786362403333!5m2!1sen!2szm" 
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default ContactComp;
