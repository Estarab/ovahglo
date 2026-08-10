import React, { useState } from 'react';

const EmailComponent = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Collect form data
    const formData = {
      name,
      email,
      message,
    };
  
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Handle success (show a success message or clear the form)
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

  return (
    <div className="bg-green-600 p-6 text-white rounded-md max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Contact Us via Email</h2>
      <p className="text-center mb-6">Send us your details and message, and we'll get back to you shortly!</p>

      {error && <p className="text-red-400 text-center mb-4">{error}</p>}
      {success && <p className="text-green-400 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="text-gray-700 mb-4">
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
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EmailComponent;
