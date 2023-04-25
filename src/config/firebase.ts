// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7dShdmVH1cZXeM_Zq0JsWwa1MS0qoluo",
  authDomain: "react-course-9af1b.firebaseapp.com",
  projectId: "react-course-9af1b",
  storageBucket: "react-course-9af1b.appspot.com",
  messagingSenderId: "937612928419",
  appId: "1:937612928419:web:08acfd00a3034b3153e616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)