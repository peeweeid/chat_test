// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwjOv4bwMp1mcLbORzB_8or-FNpkCE1yo",
  authDomain: "testsaja-4bdd8.firebaseapp.com",
  databaseURL: "https://testsaja-4bdd8-default-rtdb.firebaseio.com",
  projectId: "testsaja-4bdd8",
  storageBucket: "testsaja-4bdd8.appspot.com",
  messagingSenderId: "654421826291",
  appId: "1:654421826291:web:20cd825f26c88fef383586",
  measurementId: "G-20RZD2K19H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}