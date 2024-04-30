// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRTfaDDAq90EA2TdAUoCdMCciOQyLyfbs",
  authDomain: "neflixgpt-aa7df.firebaseapp.com",
  projectId: "neflixgpt-aa7df",
  storageBucket: "neflixgpt-aa7df.appspot.com",
  messagingSenderId: "341335771753",
  appId: "1:341335771753:web:4cef064ccc33ba8ffe70f8",
  measurementId: "G-RLVP62272M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
