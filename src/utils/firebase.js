// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYEjlfJUF7bN4xETgPA3mXPPUO93V0cbU",
  authDomain: "netflixgpt-a1e15.firebaseapp.com",
  projectId: "netflixgpt-a1e15",
  storageBucket: "netflixgpt-a1e15.appspot.com",
  messagingSenderId: "1048135943039",
  appId: "1:1048135943039:web:db4998b6dc0d66e79d504a",
  measurementId: "G-BBSTNQRVK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
