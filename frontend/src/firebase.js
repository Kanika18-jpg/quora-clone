// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUu0DxzdJQqk0BBZ8Mzdo9CykWQFXneuw",
  authDomain: "quora-bvp.firebaseapp.com",
  projectId: "quora-bvp",
  storageBucket: "quora-bvp.appspot.com",
  messagingSenderId: "277497373574",
  appId: "1:277497373574:web:6bc669d5960cae60cac207",
  measurementId: "G-H4L5MM53LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth();
const Provider = new GoogleAuthProvider();

export {auth , Provider}