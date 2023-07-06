// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsBuV_5NY7i1V-3NHhLirV7W10idE3jp0",
  authDomain: "zoom-clone-21bb1.firebaseapp.com",
  projectId: "zoom-clone-21bb1",
  storageBucket: "zoom-clone-21bb1.appspot.com",
  messagingSenderId: "570186761377",
  appId: "1:570186761377:web:62788ab05cbee2878f5ce0",
  measurementId: "G-3567XZ8QG7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
