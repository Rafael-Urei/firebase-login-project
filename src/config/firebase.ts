// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfatmQVw-IXeICzoLL0vsCr-gs-xqymxk",
  authDomain: "react-course-urei.firebaseapp.com",
  projectId: "react-course-urei",
  storageBucket: "react-course-urei.appspot.com",
  messagingSenderId: "562281869276",
  appId: "1:562281869276:web:4acb2c2b15ecd6e5aba919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();