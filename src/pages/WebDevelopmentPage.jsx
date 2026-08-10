import React from 'react';
import webImage from '../assets/web.jpg'; // Make sure to use your own image path
import Pricing from '../components/Pricing';

const WebDevelopmentPage = () => {
  return (
    <section className="py-16 bg-white" id="web-development">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Why Your Business Needs a Website</h2>

        <div className="flex justify-center mb-8">
          <img
            src={webImage}
            alt="Web Development"
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-6">
          In today's world, having a website is more important than ever. Whether you're running a small business or a large company, your website serves as your online presence. Think of it as your virtual storefront – it’s where people can find you, learn about what you do, and connect with you. A website is the foundation of your business’s online identity.
        </p>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">What Does a Website Do for You?</h3>
        <p className="text-lg text-gray-700 mb-6">
          A website is more than just a digital business card. Here’s how it helps:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Establish Your Brand:</strong> Your website gives your business an identity that you can control. It lets you showcase your products, services, and values in a way that represents who you are.</li>
          <li><strong>Reach a Wider Audience:</strong> With a website, you’re not limited to local customers. People from all around the world can find you and learn about what you offer 24/7, even when you're not working.</li>
          <li><strong>Build Trust and Credibility:</strong> A professional-looking website makes your business look trustworthy. Customers feel more comfortable making a purchase or reaching out when they see you have a well-designed website with contact information, reviews, and more.</li>
          <li><strong>Increase Sales and Conversions:</strong> A good website not only educates visitors but also converts them into paying customers. Through engaging content, clear calls-to-action (like "Contact Us" or "Buy Now"), and easy navigation, a website helps you make more sales.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose Us for Your Website?</h3>
        <p className="text-lg text-gray-700 mb-6">
          At AB Nation Tech, we specialize in creating websites that are:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Responsive:</strong> Your website will work on all devices, from desktops to tablets and smartphones. No matter where your customers are, they’ll always have a smooth browsing experience.</li>
          <li><strong>Visually Appealing:</strong> We design websites that are not only functional but also beautiful. Your website will reflect your brand and attract visitors.</li>
          <li><strong>User-Friendly:</strong> Our websites are easy to navigate. We ensure your visitors can find what they need quickly and easily, improving their experience.</li>
          <li><strong>Optimized for Performance:</strong> Your website will load fast and run smoothly, making sure your visitors don’t get frustrated waiting for pages to load.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">How We Build Your Website</h3>
        <p className="text-lg text-gray-700 mb-6">
          Here’s how we work with you to create a website that helps your business grow:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Step 1: Consultation</strong> – We start by understanding your business, your goals, and what you want your website to achieve. Whether it’s to inform, sell, or engage, we make sure we know exactly what you need.</li>
          <li><strong>Step 2: Design</strong> – Our design team creates mockups and layouts that reflect your brand, ensuring the website looks professional and aligns with your business identity.</li>
          <li><strong>Step 3: Development</strong> – Once the design is finalized, we build your website, ensuring it’s user-friendly, responsive, and functional on all devices.</li>
          <li><strong>Step 4: Testing & Launch</strong> – We thoroughly test your website to make sure it works perfectly. After that, we launch it and make it live for the world to see!</li>
          <li><strong>Step 5: Ongoing Support</strong> – After launch, we don’t just leave you hanging. We provide ongoing support and updates to ensure your website remains up-to-date and secure.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Get Started Today!</h3>
        <p className="text-lg text-gray-700 mb-6">
          If you’re ready to take your business to the next level, a professionally designed website is the first step. Let’s work together to build a website that will attract new customers, help you grow, and establish your brand online.
        </p>

        <Pricing/>

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

export default WebDevelopmentPage;
