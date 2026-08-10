// client/src/components/ConferenceCall.js
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const ConferenceCall = () => {
  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [users, setUsers] = useState([]);
  const socketRef = useRef();
  const videoRef = useRef();
  const audioRef = useRef();
  let localStream;

  useEffect(() => {
    // Connect to the backend server via Socket.IO
    socketRef.current = io.connect('http://localhost:5000');

    // Listen for 'userJoined' event to update the user list
    socketRef.current.on('userJoined', (userName) => {
      setUsers((prevUsers) => [...prevUsers, userName]);
    });

    // Listen for 'audioToggled' and 'videoToggled' to handle changes
    socketRef.current.on('audioToggled', (userName, isMuted) => {
      console.log(`${userName} ${isMuted ? 'muted' : 'unmuted'} their audio.`);
    });

    socketRef.current.on('videoToggled', (userName, isVideoOff) => {
      console.log(`${userName} turned ${isVideoOff ? 'off' : 'on'} their video.`);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleLogin = () => {
    socketRef.current.emit('joinRoom', room, userName);
  };

  const toggleAudio = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    socketRef.current.emit('toggleAudio', room, userName, newMutedState);
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !newMutedState;
      });
    }
  };

  const toggleVideo = () => {
    const newVideoState = !isVideoOff;
    setIsVideoOff(newVideoState);
    socketRef.current.emit('toggleVideo', room, userName, newVideoState);
    if (localStream) {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = !newVideoState;
      });
    }
  };

  useEffect(() => {
    // Access the user's webcam and mic using WebRTC
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        audioRef.current.srcObject = stream;
        localStream = stream;
      })
      .catch((err) => {
        console.error('Error accessing media devices.', err);
      });

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h2>Join Conference</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={handleLogin}>Join Room</button>

      <div>
        <h3>Meeting Room: {room}</h3>
        <h4>Users in Room:</h4>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={toggleAudio}>
          {isMuted ? 'Unmute' : 'Mute'} Audio
        </button>
        <button onClick={toggleVideo}>
          {isVideoOff ? 'Turn Video On' : 'Turn Video Off'}
        </button>
      </div>

      <div>
        <video ref={videoRef} autoPlay></video>
        <audio ref={audioRef} autoPlay></audio>
      </div>
    </div>
  );
};

export default ConferenceCall;
