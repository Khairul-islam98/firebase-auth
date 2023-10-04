
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqPKL3BfSvXThY7XsZpJoAvzZu5toRyIQ",
  authDomain: "auth-firebase--private-route.firebaseapp.com",
  projectId: "auth-firebase--private-route",
  storageBucket: "auth-firebase--private-route.appspot.com",
  messagingSenderId: "594271170860",
  appId: "1:594271170860:web:4e855f156ee070f9f8fc89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;