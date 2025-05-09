// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEmRVKzoDBeGI-CzkCTulng13Zyg3L-PQ",
  authDomain: "netflixgpt-69e1a.firebaseapp.com",
  projectId: "netflixgpt-69e1a",
  storageBucket: "netflixgpt-69e1a.firebasestorage.app",
  messagingSenderId: "225430949607",
  appId: "1:225430949607:web:02fdd4cc532bad03615c42",
  measurementId: "G-099R10FK0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export { app, analytics, auth };