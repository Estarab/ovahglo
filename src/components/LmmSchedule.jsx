// components/Schedule.js
import React, { useState } from 'react';

const LmmSchedule = () => {
  // Hardcoded schedule data
  const [scheduleData, setScheduleData] = useState([
    { date: "1st January", day: "Wednesday", person: "Sis Esther", songs: [] },
    { date: "5th January", day: "Sunday", person: "Sis Natasha", songs: [] },
    { date: "8th January", day: "Wednesday", person: "Sis Taonga Ngoma", songs: [] },
    { date: "12th January", day: "Sunday", person: "Sis Joyce & Sis Zoe", songs: [] },
    { date: "15th January", day: "Wednesday", person: "Sis Ruth", songs: [] },
    { date: "19th January", day: "Sunday", person: "Sis Esther", songs: [] },
    { date: "22nd January", day: "Wednesday", person: "Sis Natasha", songs: [] },
    { date: "26th January", day: "Sunday", person: "Sis Leni & Sis Taonga Ngoma", songs: [] },
    { date: "29th January", day: "Wednesday", person: "Sis Lisa", songs: [] },
    { date: "2nd February", day: "Sunday", person: "Sis Ruth", songs: [] },
    { date: "5th February", day: "Wednesday", person: "Sis Petronella & Sis Rhema", songs: [] },
    { date: "9th February", day: "Sunday", person: "Br Peku & Sis Lisa", songs: [] },
    { date: "12th February", day: "Wednesday", person: "Sis Esther", songs: [] },
    { date: "16th February", day: "Sunday", person: "Sis Abigail & Sis Taonga Zulu", songs: [] },
    { date: "19th February", day: "Wednesday", person: "Sis Rosemary & Sis Rhema", songs: [] },
    { date: "23rd February", day: "Sunday", person: "Sis Louise", songs: [] },
    { date: "26th February", day: "Wednesday", person: "Sis Ruth", songs: [] },
  ]);

  // State for form inputs
  const [leaderName, setLeaderName] = useState('');
  const [songTitles, setSongTitles] = useState('');
  
  // Handle form submission to add songs for the leader
  const handleSongSubmit = (e) => {
    e.preventDefault();
    const updatedSchedule = scheduleData.map((entry) => {
      if (entry.person === leaderName) {
        entry.songs = songTitles.split(',').map((song) => song.trim());
      }
      return entry;
    });
    setScheduleData(updatedSchedule);
    setLeaderName('');
    setSongTitles('');
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">2025 Song Leading Schedule</h1>
      <h2 className="text-xl text-center mb-4">January - February</h2>

      {/* Song Leader Upload Form */}
      <form onSubmit={handleSongSubmit} className="mb-6 text-center">
        <input
          type="text"
          value={leaderName}
          onChange={(e) => setLeaderName(e.target.value)}
          placeholder="Enter Song Leader's Name"
          className="border border-gray-300 px-4 py-2 rounded-lg mb-2"
          required
        />
        <textarea
          value={songTitles}
          onChange={(e) => setSongTitles(e.target.value)}
          placeholder="Enter Song Titles (comma separated)"
          className="border border-gray-300 px-4 py-2 rounded-lg mb-4 w-full"
          rows="3"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Songs
        </button>
      </form>

      {/* Display the Schedule with songs */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left bg-gray-100">Date</th>
              <th className="px-4 py-2 text-left bg-gray-100">Day</th>
              <th className="px-4 py-2 text-left bg-gray-100">Person</th>
              <th className="px-4 py-2 text-left bg-gray-100">Songs</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((entry, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{entry.date}</td>
                <td className="px-4 py-2">{entry.day}</td>
                <td className="px-4 py-2">{entry.person}</td>
                <td className="px-4 py-2">
                  {entry.songs.length > 0 ? (
                    entry.songs.map((song, songIndex) => (
                      <span key={songIndex} className="block">{song}</span>
                    ))
                  ) : (
                    <span className="text-gray-500">No songs added</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LmmSchedule;
