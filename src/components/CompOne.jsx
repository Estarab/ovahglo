import React from 'react';
import { FaTools, FaRobot, FaIndustry, FaWater } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Optional for animation
import heroImage from '../assets/projects/logo.jpeg'; // Adjust the path if needed

const CompOne = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center text-center text-white p-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Intelligent Systems Limited (ISL)
          </motion.h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-800 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-yellow-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-xl mt-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Intelligent Systems Limited (ISL) is an Electrical and Systems Engineering company. We specialize in
            Industrial Automation, Motor Drives, Process Instrumentation, and Low Voltage Systems, Products, and
            Engineering.
          </motion.p>
          <motion.div
            className="mt-10 text-left text-gray-300 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p><strong>Systems Integrator:</strong> We design, build, and install automation and low voltage systems.</p>
            <p><strong>Motor Control Centres:</strong> We build MCCs equipped with conventional controls and VFDs.</p>
            <p><strong>Siemens Industry Products:</strong> We supply and support a wide range of Siemens products with training.</p>
            <p><strong>SIEMENS SITRAIN® Training Partner:</strong> We offer both on-site and off-site training in automation and drives courses.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-yellow-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <FaRobot className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Industrial Automation</h3>
              <p className="mt-4 text-gray-300">We provide top-tier automation solutions for various industries.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <FaTools className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Motor Drives</h3>
              <p className="mt-4 text-gray-300">We design and implement advanced motor drive systems.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <FaIndustry className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Process Instrumentation</h3>
              <p className="mt-4 text-gray-300">We provide precision instrumentation solutions for industries.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <FaWater className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Water & Energy</h3>
              <p className="mt-4 text-gray-300">We offer solutions for water utilities and energy management.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-yellow-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Values
          </motion.h2>
          <motion.div
            className="mt-10 text-left text-gray-300 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p><strong>Customer Value:</strong> We provide value for money in all we do, with continuous product and systems support.</p>
            <p><strong>Social Responsibility:</strong> We help educational institutions through product donations and student internships.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompOne;
