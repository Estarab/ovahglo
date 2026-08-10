





import { useState } from "react";

const ScheduleWithCalendar = () => {
  const scheduleData = [
    { date: "2025-01-01", person: "Sis Esther", songs: ["Songs not added!"] },
    { date: "2025-01-05", person: "Sis Natasha", songs: ["Songs not added!"] },
    { date: "2025-01-08", person: "Sis Taonga Ngoma", songs: ["Creator Of the Universe","Lord you Reign","The Greatest Lord ","Lords of Lords","Alabaster box","Splendor"] },
    { date: "2025-01-12", person: "Sis Joyce & Sis Zoe", songs: ["What a Priviledge", "You are Holy","I am Satisfied in your Love"] },
    { date: "2025-01-15", person: "Sis Ruth", songs: ["Songs not added!"] },
    { date: "2025-01-19", person: "Sis Esther", songs: ["Songs not added!"] },
    { date: "2025-01-22", person: "Sis Natasha", songs: ["Songs not added!"] },
    { date: "2025-01-26", person: "Sis Leni & Sis Taonga Ngoma", songs: ["Songs not added!"] },
    { date: "2025-01-29", person: "Sis Lisa", songs: ["Songs not added!"] },
    { date: "2025-02-02", person: "Sis Ruth", songs: ["Songs not added!"] },
    { date: "2025-02-05", person: "Sis Petronella & Sis Rhema", songs: ["Maker of all things by Sylvia","Holy most holy by Maya"," Mighty God you're the greatest","Thine is the kingdom"] },
    { date: "2025-02-09", person: "Br Peku & Sis Lisa", songs: ["Songs not added!"] },
    { date: "2025-02-12", person: "Sis Esther", songs: ["Songs not added!"] },
    { date: "2025-02-16", person: "Sis Abigail & Sis Taonga Zulu", songs: ["Songs not added!"] },
    { date: "2025-02-19", person: "Sis Rosemary & Sis Rhema", songs: ["Songs not added!"] },
    { date: "2025-02-23", person: "Sis Louise", songs: ["What a privilege","How marvelous","The living God","Essence"] },
    { date: "2025-02-26", person: "Sis Ruth", songs: ["Songs not added!"] },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.getDay();
  };

  const getScheduleForDate = (dateString) => {
    const schedule = scheduleData.find((entry) => entry.date === dateString);
    return schedule ? schedule : null;
  };

  const generateCalendar = (year, month) => {
    const date = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const calendar = [];

    const startingDay = getDayOfWeek(date.toISOString());
    for (let i = 0; i < startingDay; i++) {
      calendar.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
      const dayOfWeek = getDayOfWeek(dateString);

      if (dayOfWeek === 0 || dayOfWeek === 3) {
        calendar.push(dateString);
      } else {
        calendar.push(null);
      }
    }

    return calendar;
  };

  const handleDateClick = (date) => {
    const schedule = getScheduleForDate(date);
    setSelectedDate(schedule);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6">Song Leading Calendar</h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
        {/* January Calendar */}
        <div className="w-full sm:w-64 md:w-72 lg:w-96">
          <div className="text-center text-md sm:text-xl font-semibold mb-2 sm:mb-4">January 2025</div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            <div className="text-center text-xs sm:text-sm font-semibold">Sun</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Mon</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Tue</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Wed</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Thu</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Fri</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-0 sm:gap-0 mt-2">
            {generateCalendar(2025, 1).map((date, index) => {
              if (date) {
                const schedule = getScheduleForDate(date);
                return (
                  <div
                    key={index}
                    className="border text-xs sm:text-xs p-2 sm:p-2 text-center cursor-pointer rounded-lg hover:bg-gray-200 mt-2"
                    onClick={() => handleDateClick(date)}
                  >
                    {new Date(date).getDate()}<br />
                    {schedule ? schedule.person : ""}
                  </div>
                );
              } else {
                return (
                  <div key={index} className="border text-xs sm:text-xs p-2 sm:p-2 text-center bg-gray-100"></div>
                );
              }
            })}
          </div>
        </div>

        {/* February Calendar */}
        <div className="w-full sm:w-64 md:w-72 lg:w-96">
          <div className="text-center text-md sm:text-xl font-semibold mb-2 sm:mb-4">February 2025</div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            <div className="text-center text-xs sm:text-sm font-semibold">Sun</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Mon</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Tue</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Wed</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Thu</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Fri</div>
            <div className="text-center text-xs sm:text-sm font-semibold">Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-0 sm:gap-0 mt-2">
            {generateCalendar(2025, 2).map((date, index) => {
              if (date) {
                const schedule = getScheduleForDate(date);
                return (
                  <div
                    key={index}
                    className="border text-xs sm:text-xs p-2 sm:p-2 text-center cursor-pointer rounded-lg hover:bg-gray-200 mt-2"
                    onClick={() => handleDateClick(date)}
                  >
                    {new Date(date).getDate()}<br />
                    {schedule ? schedule.person : ""}
                  </div>
                );
              } else {
                return (
                  <div key={index} className="border text-xs sm:text-sm p-2 sm:p-3 text-center bg-gray-100"></div>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* Display Modal when a date is clicked */}
      {selectedDate && isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-72 sm:w-80 md:w-96 lg:w-128">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Schedule for {selectedDate.date}</h2>
            <p><strong>Song Leader:</strong> {selectedDate.person}</p>
            {selectedDate.songs.map((song, index) => (
            <p key={index} className="text-sm sm:text-base">{song}</p>
          ))}
            {/* <p><strong>Songs:</strong> {selectedDate.songs.join(", ")}</p> */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleWithCalendar;
