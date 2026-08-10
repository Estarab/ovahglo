import React, { useState, useEffect } from "react"; 
// Import the birthday girl image
// import birthdayImage from "../assets/WhatsApp_Image_2024-12-31_at_1.19.57_PM-removebg-preview.png"; // adjust the path as needed
import birthdayImage from "../assets/projects/logo.jpeg"; // adjust the path as needed

const Countdown = () => {
  const targetDate = new Date("February 18, 2028 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
      return;
    }

    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
    const millisecondsLeft = Math.floor(distance % 1000);

    setTimeLeft({
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
      milliseconds: millisecondsLeft,
    });
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 p-5">
      <div className="flex flex-col sm:flex-col lg:flex-row bg-white p-8 rounded-lg shadow-2xl w-full max-w-7xl">
        {/* Left side: Image of */}
        <div className="w-full sm:w-full lg:w-1/5 p-5 transform sm:translate-x-0 sm:translate-y-0 lg:translate-x-10 lg:-translate-y-12">
          <img
            src={birthdayImage} // Use the imported image here
            alt="Birthday Girl"
            className="w-full h-full object-cover rounded-xs shadow-xs"
          />
        </div>

        {/* Right side: Countdown */}
        <div className="w-full sm:w-full lg:w-2/3 mt-8 lg:mt-0 lg:ml-8">
          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-blue-500 mb-6 text-center lg:text-left">
             Event Count Down
          </h1>
          <h2 className="text-2xl sm:text-xl lg:text-2xl mb-4 text-blue-500 text-center lg:text-left">
             to february 18, 2028
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-lg font-bold mb-6">
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-3xl sm:text-2xl lg:text-4xl text-blue-500">{timeLeft.days}</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-3xl sm:text-2xl lg:text-4xl text-blue-500">{timeLeft.hours}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-3xl sm:text-2xl lg:text-4xl text-blue-500">{timeLeft.minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-xl sm:text-xl lg:text-4xl text-blue-500">{timeLeft.seconds}</span>
              <span className="text-sm">Seconds</span>
            </div>
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-xl sm:text-xl lg:text-4xl text-blue-500">{timeLeft.milliseconds}</span>
              <span className="text-sm">Millisecs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;