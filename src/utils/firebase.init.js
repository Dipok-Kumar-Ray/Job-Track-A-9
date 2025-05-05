// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFzSvHyYP3RLQvl2zFsuwMjHLGJIHDahI",
  authDomain: "jobs-track-auth.firebaseapp.com",
  projectId: "jobs-track-auth",
  storageBucket: "jobs-track-auth.firebasestorage.app",
  messagingSenderId: "793999468312",
  appId: "1:793999468312:web:22b35e7b2bbd87a108e06d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);