import React from 'react';
import digitalMarketingImage from '../assets/marketing.jpg'; // Replace with your actual image path

const DigitalMarketingPage = () => {
  return (
    <section className="py-16 bg-white" id="digital-marketing">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Boost Your Business with Our Digital Marketing Services</h2>

        <p className="text-lg text-gray-700 mb-6">
          In today’s fast-paced world, digital marketing is essential for businesses to thrive. With the right strategies, you can reach your target audience, increase brand awareness, and grow your business. Whether you're a small business or an established company, our digital marketing services can help you stand out online and achieve your business goals.
        </p>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">What Is Digital Marketing?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Digital marketing is all about using online platforms to promote your business. It includes various strategies such as search engine optimization (SEO), social media marketing, email marketing, and paid advertising to reach and engage with customers online. The goal is to drive traffic to your website, build strong relationships with your audience, and ultimately convert them into loyal customers.
        </p>

        <div className="flex justify-center mb-8">
          <img
            src={digitalMarketingImage}
            alt="Digital Marketing"
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          />
        </div>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Digital Marketing Services</h3>
        <p className="text-lg text-gray-700 mb-6">
          At AB Nation Tech, we offer a range of digital marketing services designed to help you achieve your business goals. Our expert team works closely with you to understand your business and create a customized plan that delivers results.
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Search Engine Optimization (SEO):</strong> Increase your website's visibility on search engines like Google. Our SEO strategies ensure that your business appears when potential customers search for products or services like yours.</li>
          <li><strong>Social Media Marketing:</strong> Build your brand and engage with your audience on platforms like Facebook, Instagram, Twitter, and LinkedIn. Our social media experts create content and ads that capture attention and drive engagement.</li>
          <li><strong>Email Marketing:</strong> Reach your customers directly through personalized email campaigns. We create effective email strategies that convert subscribers into loyal customers.</li>
          <li><strong>Pay-Per-Click (PPC) Advertising:</strong> Use paid ads to drive immediate traffic to your website. Our PPC campaigns are optimized to get the best results for your investment.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose Our Digital Marketing Services?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Here’s why you should choose AB Nation Tech for your digital marketing needs:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Expert Team:</strong> Our team of digital marketing professionals has years of experience in delivering successful campaigns that drive results.</li>
          <li><strong>Customized Strategies:</strong> We tailor our strategies to suit your business and goals, ensuring that you get the best possible outcomes.</li>
          <li><strong>Measurable Results:</strong> We provide detailed reports and analytics so you can track the success of your campaigns and see how your investment is paying off.</li>
          <li><strong>Cost-Effective:</strong> Our digital marketing services are designed to deliver maximum ROI. We focus on strategies that bring you the best results without breaking your budget.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Get Started Today!</h3>
        <p className="text-lg text-gray-700 mb-6">
          If you're ready to take your business to the next level, our digital marketing services are here to help. We'll work with you every step of the way to ensure that your business gets the online presence it deserves.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Us for a Free Digital Marketing Consultation
        </a>
      </div>
    </section>
  );
};

export default DigitalMarketingPage;
