import React from 'react';
import schoolImage from '../assets/school.jpg'; // Replace with your actual image path
import hotelImage from '../assets/hotel.jpg'; // Replace with your actual image path
import hospitalImage from '../assets/hospital.jpg'; // Replace with your actual image path

const ManagementSystemsPage = () => {
  return (
    <section className="py-16 bg-white" id="management-systems">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Management Systems That Simplify Your Operations</h2>

        <p className="text-lg text-gray-700 mb-6">
          Running a business can be complicated, but it doesn't have to be. With the right management system, you can streamline your operations, improve efficiency, and focus on what really matters – growing your business. Whether you're running a school, a hotel, or a hospital, we have tailored management systems that make your daily tasks easier and more efficient.
        </p>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">School Management System</h3>
        <div className="flex justify-center mb-8">
          <img
            src={schoolImage}
            alt="School Management System"
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-6">
          Managing a school is no small task, but with a School Management System, you can simplify many administrative processes. Our system handles everything from student registration, attendance tracking, grading, scheduling, and communication between teachers, students, and parents. It's an all-in-one solution designed to make school operations smoother and more efficient.
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Student Registration:</strong> Easily manage student information, including admission details, contact information, and enrollment status.</li>
          <li><strong>Attendance Tracking:</strong> Keep track of student attendance in real time and generate reports for analysis.</li>
          <li><strong>Grade Management:</strong> Record grades, assignments, and exams, and make it simple for teachers to enter grades and communicate with students.</li>
          <li><strong>Scheduling:</strong> Create class schedules, exam timetables, and events in minutes. Keep everyone on the same page.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Hotel Management System</h3>
        <div className="flex justify-center mb-8">
          <img
            src={hotelImage}
            alt="Hotel Management System"
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-6">
          A hotel management system helps streamline hotel operations, from guest reservations to billing and room management. With our Hotel Management System, you can enhance the guest experience, improve operational efficiency, and stay ahead of your competitors. Our system makes it easy to handle bookings, manage room availability, and track billing and payments.
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Reservation Management:</strong> Keep track of room bookings, availability, and special requests in real time.</li>
          <li><strong>Room Management:</strong> Easily manage room assignments, maintenance schedules, and housekeeping tasks.</li>
          <li><strong>Billing & Payments:</strong> Simplify the billing process and accept payments securely and efficiently.</li>
          <li><strong>Customer Feedback:</strong> Collect guest reviews and feedback to improve your service and build customer loyalty.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Hospital Management System</h3>
        <div className="flex justify-center mb-8">
          <img
            src={hospitalImage}
            alt="Hospital Management System"
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-6">
          For hospitals, having a robust management system is crucial to ensure smooth operations and quality care. Our Hospital Management System is designed to manage patient data, appointments, billing, staff schedules, and more. With our system, healthcare providers can provide better service while managing their operations more effectively.
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Patient Data Management:</strong> Securely store and access patient records, medical history, and test results.</li>
          <li><strong>Appointment Scheduling:</strong> Manage patient appointments, doctor's schedules, and waiting times.</li>
          <li><strong>Billing & Payments:</strong> Efficiently handle billing, insurance claims, and patient payments.</li>
          <li><strong>Staff Management:</strong> Schedule staff shifts, track working hours, and manage HR data with ease.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose Our Management Systems?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our management systems are designed with ease of use and efficiency in mind. Here’s why you should choose us:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mb-6 list-disc pl-8">
          <li><strong>Customizable:</strong> Our systems can be tailored to meet the unique needs of your school, hotel, or hospital.</li>
          <li><strong>Easy to Use:</strong> We design user-friendly interfaces that ensure smooth adoption by your staff and customers.</li>
          <li><strong>Secure:</strong> Security is our top priority. We ensure your data is protected with the highest standards of security protocols.</li>
          <li><strong>Reliable Support:</strong> Our team is here to provide ongoing support, updates, and assistance whenever you need it.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-4">Get Started Today!</h3>
        <p className="text-lg text-gray-700 mb-6">
          No matter your industry, we can help you streamline your operations and take your business to the next level with our management systems. Whether it’s a school, hotel, or hospital, our solutions are designed to make your day-to-day tasks simpler and more efficient.
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

export default ManagementSystemsPage;
