// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC749B2rx0gzGuHSyE65pVG0DV6EENwbgI",
  authDomain: "ema-john-ec1af.firebaseapp.com",
  projectId: "ema-john-ec1af",
  storageBucket: "ema-john-ec1af.appspot.com",
  messagingSenderId: "694117615274",
  appId: "1:694117615274:web:0d6898081f5c161071b2d3",
  measurementId: "G-4XWZGF9F1Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
