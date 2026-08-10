import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt,FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <ul>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-xl" />
                <span>Plot No.2 J Avondale Shopping Complex, Lusaka, Zambia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-xl" />
                <span>+260 955 774 867</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-xl" />
                <span>+260 211 282451</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-xl" />
                <span>ovahglo@gmail.com</span> {/* Adjust email as needed */}
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-lg hover:text-blue-400">Home</a></li>
              <li><a href="#" className="text-lg hover:text-blue-400">Services</a></li>
              <li><a href="#" className="text-lg hover:text-blue-400">Projects</a></li>
              <li><a href="#" className="text-lg hover:text-blue-400">Systems</a></li>
              <li><a href="#" className="text-lg hover:text-blue-400">Reference Projects</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
  <h3 className="text-2xl font-semibold">Follow Us</h3>
  <div className="flex space-x-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-3xl hover:text-blue-600 transition-colors duration-300" />
    </a>
    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-3xl hover:text-blue-400 transition-colors duration-300" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-3xl hover:text-blue-700 transition-colors duration-300" />
    </a> */}
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-3xl hover:text-pink-500 transition-colors duration-300" />
    </a>
    <a href="https://wa.me/+260955774867" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="text-3xl hover:text-green-600 transition-colors duration-300" />
    </a>
  </div>
</div>

          
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>© 2026 Ovahglo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
