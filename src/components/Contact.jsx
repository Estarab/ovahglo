import React from 'react';

const Contact = () => {
  return (
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
  );
};

export default Contact;
