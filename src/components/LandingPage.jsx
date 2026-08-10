import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 mt-24">

      {/* Header Section */}
      <header className="bg-blue-600 text-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <a href="/" className="text-2xl font-semibold">ABNATION TECH</a>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-yellow-300">About Us</a>
            <a href="#services" className="hover:text-yellow-300">Services</a>
            <a href="#pricing" className="hover:text-yellow-300">Pricing</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96 text-center text-white" style={{ backgroundImage: 'url(hero-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">We Build Your Future Online</h1>
          <p className="mt-4 text-xl sm:text-2xl">Offering top-notch web & app development, digital marketing, and tech solutions.</p>
          <a href="#services" className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full text-xl">Learn More</a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">AB Nation Tech is a leading provider of web and app development services, digital marketing, and other tech-related solutions. Our mission is to help businesses grow and succeed in the digital world.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-700">Custom websites that meet your business needs and provide great user experiences.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">App Development</h3>
              <p className="text-gray-700">Native and cross-platform mobile apps designed to enhance your business operations.</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-700">Strategic marketing campaigns to promote your brand and boost online visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages and Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-8">Our Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Basic Package</h3>
              <p className="text-lg mb-4">$499</p>
              <p className="text-gray-700 mb-4">Includes a 5-page website with basic features.</p>
              <a href="#contact" className="text-yellow-500 hover:text-yellow-600">Get Started</a>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Standard Package</h3>
              <p className="text-lg mb-4">$999</p>
              <p className="text-gray-700 mb-4">Includes 10 pages with custom features and SEO optimization.</p>
              <a href="#contact" className="text-yellow-500 hover:text-yellow-600">Get Started</a>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Premium Package</h3>
              <p className="text-lg mb-4">$1499</p>
              <p className="text-gray-700 mb-4">Complete website with e-commerce integration and digital marketing campaign.</p>
              <a href="#contact" className="text-yellow-500 hover:text-yellow-600">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-4">Terms and Conditions</h2>
          <p className="text-lg text-gray-700 mb-4">By using our services, you agree to our terms and conditions. <a href="/terms" className="text-blue-500">Read full terms</a></p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <form action="#" method="POST" className="max-w-lg mx-auto">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" required></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2025 AB Nation Tech. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default LandingPage;
