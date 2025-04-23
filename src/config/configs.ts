// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu43U45g2js7gYEcON-7GUjY_fg2MCgFw",
  authDomain: "zarkchat-efa26.firebaseapp.com",
  projectId: "zarkchat-efa26",
  storageBucket: "zarkchat-efa26.firebasestorage.app",
  messagingSenderId: "472221294433",
  appId: "1:472221294433:web:33ed6a943e1d0c7631ef20",
  measurementId: "G-Y078CBE0DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth;