import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { FiMic, FiMicOff, FiVideo, FiVideoOff } from 'react-icons/fi';  // Icons for toggling audio/video

const socket = io('http://localhost:3000'); // Connect to the backend

function MeetingPage() {
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]); // List of users
  const [isMuted, setIsMuted] = useState(false); // Mute status
  const [isVideoOff, setIsVideoOff] = useState(false); // Video off status
  const [stream, setStream] = useState(null); // User's video stream
  const localVideoRef = useRef(null); // Ref for local video element

  useEffect(() => {
    // Listen to events from backend
    socket.on('userListUpdated', (updatedUsers) => {
      setUsers(updatedUsers); // Update users list in the meeting
    });

    socket.on('userJoined', (userName) => {
      console.log(`${userName} joined the meeting`);
    });

    socket.on('userLeft', (userName) => {
      console.log(`${userName} left the meeting`);
    });

    socket.on('audioToggled', (userName, isMuted) => {
      console.log(`${userName} ${isMuted ? 'muted' : 'unmuted'} their audio`);
    });

    socket.on('videoToggled', (userName, isVideoOff) => {
      console.log(`${userName} ${isVideoOff ? 'turned off' : 'turned on'} their video`);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('userListUpdated');
      socket.off('userJoined');
      socket.off('userLeft');
      socket.off('audioToggled');
      socket.off('videoToggled');
    };
  }, []);

  // Handle Join Room
  const handleJoinRoom = async () => {
    if (userName) {
      // Get user's video and audio stream
      const userStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(userStream);

      // Attach local stream to the video element
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = userStream;
      }

      socket.emit('joinRoom', userName); // Join the default room ('general')
    }
  };

  // Handle Leave Room
  const handleLeaveRoom = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop()); // Stop media tracks
    }
    socket.emit('leaveRoom', userName); // Emit leave room event
    setStream(null); // Clear the stream
  };

  // Handle Toggle Audio
  const handleToggleAudio = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    socket.emit('toggleAudio', userName, newMutedState);
    if (stream) {
      stream.getTracks().forEach(track => {
        if (track.kind === 'audio') track.enabled = !newMutedState;
      });
    }
  };

  // Handle Toggle Video
  const handleToggleVideo = () => {
    const newVideoOffState = !isVideoOff;
    setIsVideoOff(newVideoOffState);
    socket.emit('toggleVideo', userName, newVideoOffState);
    if (stream) {
      stream.getTracks().forEach(track => {
        if (track.kind === 'video') track.enabled = !newVideoOffState;
      });
    }
  };

  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      {/* Name Input and Join Button */}
      {!stream && (
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="mb-4 p-2 border border-gray-300 rounded"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            onClick={handleJoinRoom}
            className="p-2 bg-blue-600 text-white rounded"
          >
            Join Meeting
          </button>
        </div>
      )}

      {/* Video and Audio Controls */}
      {stream && (
        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleToggleAudio}
            className="p-4 bg-red-600 text-white rounded-full"
          >
            {isMuted ? <FiMicOff /> : <FiMic />}
          </button>
          <button
            onClick={handleToggleVideo}
            className="p-4 bg-blue-600 text-white rounded-full"
          >
            {isVideoOff ? <FiVideoOff /> : <FiVideo />}
          </button>
          <button
            onClick={handleLeaveRoom}
            className="p-4 bg-gray-600 text-white rounded-full"
          >
            Leave Meeting
          </button>
        </div>
      )}

      {/* Local Video */}
      {stream && (
        <video
          ref={localVideoRef}
          autoPlay
          muted
          className="w-40 h-40 border rounded-lg mb-4"
        />
      )}

      {/* Participants List */}
      <div className="text-lg mb-4">Participants:</div>
      <div className="flex flex-wrap justify-center space-x-4">
        {users.map((user, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">{user.name[0]}</span>
            </div>
            <span className="mt-2 text-sm text-center">{user.name}</span>

            {/* Display the mic and video status icons */}
            <div className="flex space-x-2 mt-2">
              <button className={`text-xs ${user.isMuted ? 'text-red-500' : 'text-green-500'}`}>
                {user.isMuted ? <FiMicOff /> : <FiMic />}
                <span>{user.isMuted ? 'Mic OFF' : 'Mic ON'}</span>
              </button>

              <button className={`text-xs ${user.isVideoOff ? 'text-red-500' : 'text-green-500'}`}>
                {user.isVideoOff ? <FiVideoOff /> : <FiVideo />}
                <span>{user.isVideoOff ? 'Video OFF' : 'Video ON'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetingPage;










// import React, { useState, useEffect, useRef } from 'react';
// import { io } from 'socket.io-client';
// import { FiMic, FiMicOff, FiVideo, FiVideoOff } from 'react-icons/fi';  // Icons for toggling audio/video

// const socket = io('http://localhost:3000'); // Connect to the backend

// function MeetingPage() {
//   const [userName, setUserName] = useState('');
//   const [users, setUsers] = useState([]); // List of users
//   const [isMuted, setIsMuted] = useState(false); // Mute status
//   const [isVideoOff, setIsVideoOff] = useState(false); // Video off status
//   const [stream, setStream] = useState(null); // User's video stream
//   const localVideoRef = useRef(null); // Ref for local video element

//   useEffect(() => {
//     // Listen to events from backend
//     socket.on('userListUpdated', (updatedUsers) => {
//       setUsers(updatedUsers); // Update users list in the meeting
//     });

//     socket.on('userJoined', (userName) => {
//       console.log(`${userName} joined the meeting`);
//     });

//     socket.on('userLeft', (userName) => {
//       console.log(`${userName} left the meeting`);
//     });

//     socket.on('audioToggled', (userName, isMuted) => {
//       console.log(`${userName} ${isMuted ? 'muted' : 'unmuted'} their audio`);
//     });

//     socket.on('videoToggled', (userName, isVideoOff) => {
//       console.log(`${userName} ${isVideoOff ? 'turned off' : 'turned on'} their video`);
//     });

//     // Cleanup on component unmount
//     return () => {
//       socket.off('userListUpdated');
//       socket.off('userJoined');
//       socket.off('userLeft');
//       socket.off('audioToggled');
//       socket.off('videoToggled');
//     };
//   }, []);

//   // Handle Join Room
//   const handleJoinRoom = async () => {
//     if (userName) {
//       // Get user's video and audio stream
//       const userStream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       setStream(userStream);

//       // Attach local stream to the video element
//       if (localVideoRef.current) {
//         localVideoRef.current.srcObject = userStream;
//       }

//       socket.emit('joinRoom', userName); // Join the default room ('general')
//     }
//   };

//   // Handle Leave Room
//   const handleLeaveRoom = () => {
//     if (stream) {
//       stream.getTracks().forEach(track => track.stop()); // Stop media tracks
//     }
//     socket.emit('leaveRoom', userName); // Emit leave room event
//     setStream(null); // Clear the stream
//   };

//   // Handle Toggle Audio
//   const handleToggleAudio = () => {
//     const newMutedState = !isMuted;
//     setIsMuted(newMutedState);
//     socket.emit('toggleAudio', userName, newMutedState);
//     if (stream) {
//       stream.getTracks().forEach(track => {
//         if (track.kind === 'audio') track.enabled = !newMutedState;
//       });
//     }
//   };

//   // Handle Toggle Video
//   const handleToggleVideo = () => {
//     const newVideoOffState = !isVideoOff;
//     setIsVideoOff(newVideoOffState);
//     socket.emit('toggleVideo', userName, newVideoOffState);
//     if (stream) {
//       stream.getTracks().forEach(track => {
//         if (track.kind === 'video') track.enabled = !newVideoOffState;
//       });
//     }
//   };

//   return (
//     <div className="h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
//       {/* Name Input and Join Button */}
//       {!stream && (
//         <div className="mb-4 text-center">
//           <input
//             type="text"
//             placeholder="Enter Your Name"
//             className="mb-4 p-2 border border-gray-300 rounded"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           <button
//             onClick={handleJoinRoom}
//             className="p-2 bg-blue-600 text-white rounded"
//           >
//             Join Meeting
//           </button>
//         </div>
//       )}

//       {/* Video and Audio Controls */}
//       {stream && (
//         <div className="flex space-x-4 mb-4">
//           <button
//             onClick={handleToggleAudio}
//             className="p-4 bg-red-600 text-white rounded-full"
//           >
//             {isMuted ? <FiMicOff /> : <FiMic />}
//           </button>
//           <button
//             onClick={handleToggleVideo}
//             className="p-4 bg-blue-600 text-white rounded-full"
//           >
//             {isVideoOff ? <FiVideoOff /> : <FiVideo />}
//           </button>
//           <button
//             onClick={handleLeaveRoom}
//             className="p-4 bg-gray-600 text-white rounded-full"
//           >
//             Leave Meeting
//           </button>
//         </div>
//       )}

//       {/* Local Video */}
//       {stream && (
//         <video
//           ref={localVideoRef}
//           autoPlay
//           muted
//           className="w-40 h-40 border rounded-lg mb-4"
//         />
//       )}

//       {/* Participants List */}
//       <div className="text-lg mb-4">Participants:</div>
//       <div className="flex flex-wrap justify-center space-x-4">
//         {users.map((user, index) => (
//           <div key={index} className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
//             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
//               <span className="text-white text-lg">{user.name[0]}</span>
//             </div>
//             <span className="mt-2 text-sm text-center">{user.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MeetingPage;
