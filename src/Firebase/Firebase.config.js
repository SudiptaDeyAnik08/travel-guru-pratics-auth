// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvnuldIkLGjSJApN2nFSsWUOlevAca9KE",
  authDomain: "travel-guru-pratics-auth.firebaseapp.com",
  projectId: "travel-guru-pratics-auth",
  storageBucket: "travel-guru-pratics-auth.appspot.com",
  messagingSenderId: "532855728388",
  appId: "1:532855728388:web:2fff33593301f5a6984851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;