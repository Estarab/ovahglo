// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ab-nation-tech.firebaseapp.com",
  projectId: "ab-nation-tech",
  storageBucket: "ab-nation-tech.firebasestorage.app",
  messagingSenderId: "1049506149483",
  appId: "1:1049506149483:web:ca2b5ce8ab2c31d972ed2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);