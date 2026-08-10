import React from 'react';
import appImage from '../assets/app2.jpg'; // Make sure to use your own image path

const AppDevelopmentPage = () => {
  return (
    <section className="py-16 bg-white" id="app-development">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">A Mobile App for your Business</h2>

        <div className="flex justify-center mb-8">
          <img
            src={appImage}
            alt="App Development"
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-6">
          Having a mobile app can be a game-changer for your business. Whether you're running a small business, an e-commerce store, or a large corporation, an app helps you stay connected with your customers in a more direct, personalized, and convenient way. With a mobile app, your business is right at your customers' fingertips, anytime, anywhere.
        </p>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">What will a Mobile App Do for You?</h3>
        <p className="text-lg text-gray-700 mb-6">
          A mobile app is not just a convenience for your customers; it also offers several key benefits for your business:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Enhance Customer Engagement:</strong> A mobile app gives you a direct line to your customers. Whether it's through push notifications, in-app messaging, or special offers, your app keeps customers engaged with your brand.</li>
          <li><strong>Increase Brand Loyalty:</strong> By providing a seamless, easy-to-use experience, your mobile app can strengthen customer loyalty. Your app becomes a trusted tool that customers regularly use to interact with your business.</li>
          <li><strong>Boost Sales and Revenue:</strong> An app makes it easier for customers to purchase from you, increasing sales. Features like easy payment processing and personalized product recommendations drive revenue by improving the shopping experience.</li>
          <li><strong>Improve Customer Convenience:</strong> With your app, customers can access your services and products anytime and from anywhere. This convenience encourages more frequent visits and purchases, ultimately benefiting your bottom line.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose Us for Your Mobile App?</h3>
        <p className="text-lg text-gray-700 mb-6">
          At AB Nation Tech, we specialize in building mobile apps that deliver value for both you and your customers. Our apps are:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Customizable:</strong> We tailor every app to meet your unique business needs. Whether it’s an e-commerce app, booking system, or customer service app, we ensure that your app serves your goals perfectly.</li>
          <li><strong>User-Friendly:</strong> We focus on creating simple, intuitive designs that make it easy for your customers to navigate and interact with your app, providing a great experience.</li>
          <li><strong>Secure:</strong> We prioritize the security of your app and customer data. Our apps are built with the latest security features to keep your business and customers safe.</li>
          <li><strong>Fast and Reliable:</strong> Your app will be optimized for speed and performance, ensuring smooth functionality and minimal loading times for your users.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">How We Build Your Mobile App</h3>
        <p className="text-lg text-gray-700 mb-6">
          Here’s how we work with you to create a mobile app that perfectly fits your business needs:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Step 1: Consultation</strong> – We begin by understanding your business, your goals, and the features you want for your app. This ensures we create an app that aligns with your objectives.</li>
          <li><strong>Step 2: Design</strong> – Our design team will create an intuitive, attractive user interface (UI) that matches your brand and provides an excellent user experience (UX).</li>
          <li><strong>Step 3: Development</strong> – Once the design is approved, we begin building your app. We ensure it’s fast, reliable, and scalable, working seamlessly across Android and iOS platforms.</li>
          <li><strong>Step 4: Testing & Launch</strong> – We thoroughly test your app to ensure that it functions properly on all devices. Once everything is perfect, we launch it and make it available for download.</li>
          <li><strong>Step 5: Ongoing Support</strong> – After the app is live, we continue to provide support and updates, ensuring your app stays relevant and performs well for your customers.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Get Started Today!</h3>
        <p className="text-lg text-gray-700 mb-6">
          If you’re ready to bring your business to your customers’ fingertips, a mobile app is the way to go. Let’s work together to create an app that will improve customer engagement, increase sales, and provide a convenient experience for your users.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Us for a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default AppDevelopmentPage;
