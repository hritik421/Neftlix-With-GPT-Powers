// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh-0wiQKvwyj-1Ioj5SfsnDy__l3Hjc2I",
  authDomain: "netflixwithgptpower.firebaseapp.com",
  projectId: "netflixwithgptpower",
  storageBucket: "netflixwithgptpower.appspot.com",
  messagingSenderId: "149354626379",
  appId: "1:149354626379:web:84ae6f6f4058a28e453cce",
  measurementId: "G-58C9T8QD5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();