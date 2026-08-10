import React, { useState, useEffect } from "react"; 
// Import the birthday girl image
import birthdayImage from "../assets/WhatsApp_Image_2024-12-31_at_1.19.57_PM-removebg-preview.png"; // adjust the path as needed

const Countdown = () => {
  const targetDate = new Date("February 18, 2025 00:00:00").getTime();

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-900 via-amber-700 to-amber-500 p-5">
      <div className="flex flex-col sm:flex-col lg:flex-row bg-white p-8 rounded-lg shadow-2xl w-full max-w-7xl">
        {/* Left side: Image of the Birthday Girl */}
        <div className="w-full sm:w-full lg:w-1/5 p-5 transform sm:translate-x-0 sm:translate-y-0 lg:translate-x-40 lg:-translate-y-12">
          <img
            src={birthdayImage} // Use the imported image here
            alt="Birthday Girl"
            className="w-full h-full object-cover rounded-xs shadow-xs"
          />
        </div>

        {/* Right side: Countdown */}
        <div className="w-full sm:w-full lg:w-2/3 mt-8 lg:mt-0">
          <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-amber-500 mb-6 text-center lg:text-left">
            Birthday Count Down
          </h1>
          <h2 className="text-2xl sm:text-xl lg:text-2xl mb-4 text-amber-300 text-center lg:text-left">
             February 18, 2025
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-lg font-bold mb-6">
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-3xl sm:text-2xl lg:text-4xl text-amber-500">{timeLeft.days}</span>
              <span className="text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-3xl sm:text-2xl lg:text-4xl text-amber-500">{timeLeft.hours}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-3xl sm:text-2xl lg:text-4xl text-amber-500">{timeLeft.minutes}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-3xl sm:text-2xl lg:text-4xl text-amber-500">{timeLeft.seconds}</span>
              <span className="text-sm">Seconds</span>
            </div>
            <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
              <span className="text-3xl sm:text-2xl lg:text-4xl text-amber-500">{timeLeft.milliseconds}</span>
              <span className="text-sm">Milliseconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;



// import React, { useState, useEffect } from "react";
// // Import the birthday girl image
// import birthdayImage from "../assets/WhatsApp_Image_2024-12-31_at_1.19.57_PM-removebg-preview.png"; // adjust the path as needed

// const Countdown = () => {
//   const targetDate = new Date("February 18, 2025 00:00:00").getTime();

//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     milliseconds: 0,
//   });

//   const updateCountdown = () => {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     if (distance <= 0) {
//       setTimeLeft({
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//         milliseconds: 0,
//       });
//       return;
//     }

//     const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
//     const millisecondsLeft = Math.floor(distance % 1000);

//     setTimeLeft({
//       days: daysLeft,
//       hours: hoursLeft,
//       minutes: minutesLeft,
//       seconds: secondsLeft,
//       milliseconds: millisecondsLeft,
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(updateCountdown, 100);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-900 via-amber-700 to-amber-500 p-5">
//       <div className="flex items-center justify-between bg-white p-8 rounded-lg shadow-2xl max-w-7xl w-full sm:flex-col lg:flex-row">
//         {/* Left side: Image of the Birthday Girl */}
//         <div className="w-1/2 sm:w-full lg:w-1/5 p-10  transform translate-x-40 -translate-y-12">
//           <img
//             src={birthdayImage} // Use the imported image here
//             alt="Birthday Girl"
//             className="w-full h-full object-cover rounded-xs shadow-xs"
//           />
//         </div>

//         {/* Right side: Countdown */}
//         <div className="w-1/2 sm:w-full lg:w-2/3 mt-8 lg:mt-0">
//           <h1 className="text-5xl font-bold text-amber-500 mb-6">Birthday Count Down</h1>
//           <h2 className="text-2xl mb-4 text-amber-300">Until February 18, 2025</h2>

//           <div className="grid grid-cols-5 gap-6 text-lg font-bold mb-6">
//             <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
//               <span className="text-4xl text-amber-500">{timeLeft.days}</span>
//               <span className="text-sm">Days</span>
//             </div>
//             <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
//               <span className="text-4xl text-amber-500">{timeLeft.hours}</span>
//               <span className="text-sm">Hours</span>
//             </div>
//             <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
//               <span className="text-4xl text-amber-500">{timeLeft.minutes}</span>
//               <span className="text-sm">Minutes</span>
//             </div>
//             <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
//               <span className="text-4xl text-amber-500">{timeLeft.seconds}</span>
//               <span className="text-sm">Seconds</span>
//             </div>
//             <div className="flex flex-col items-center bg-white text-brown-700 p-4 rounded-xl shadow-md">
//               <span className="text-4xl text-amber-500">{timeLeft.milliseconds}</span>
//               <span className="text-sm">Milliseconds</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Countdown;



