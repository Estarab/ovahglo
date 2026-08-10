import React, { useState } from 'react';

const GetStarted = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // WhatsApp phone number (replace with your company's number)
  const whatsappNumber = '+260978718328'; // replace with actual number

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the input fields
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // Reset error message if all fields are filled
    setError('');

    // Construct the WhatsApp message
    const messageText = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`;

    // Encode the message to make it URL safe
    const encodedMessage = encodeURIComponent(messageText);

    // WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp link
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="bg-blue-700 p-6 text-white rounded-md max-w-6xl mx-auto mt-8 mb-4">
      <h2 className="text-2xl font-semibold text-center mb-4"> Get in Touch</h2>
      <p className="text-center mb-6">Send us a Whatsapp Message Here</p>
      
      {error && <p className="text-red-400 text-center mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4 max-w-xl mx-auto mt-4 mb-4 ">
          <label htmlFor="name" className="block text-sm font-medium ">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md text-gray-700"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="mb-4 max-w-xl mx-auto mt-4 mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md text-gray-700"
            placeholder="Enter your email"
          />
        </div>

        <div className="text-gray-700 mb-4 max-w-xl mx-auto mt-4 mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-white">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Write your message here"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded-md "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GetStarted;
