// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNMeqb6gtpECncdkB02VJ4DQpS-nuygmI",
  authDomain: "netflix-gpt-a8bd8.firebaseapp.com",
  projectId: "netflix-gpt-a8bd8",
  storageBucket: "netflix-gpt-a8bd8.firebasestorage.app",
  messagingSenderId: "237613608687",
  appId: "1:237613608687:web:66414bb5592d119883751a",
  measurementId: "G-EMB1XQFJMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();