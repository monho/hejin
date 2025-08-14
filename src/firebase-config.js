// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbtIvDQceE_4O9bj9Bz6vpHfXu8U_WvFU",
  authDomain: "heejin-d6d79.firebaseapp.com",
  projectId: "heejin-d6d79",
  storageBucket: "heejin-d6d79.firebasestorage.app",
  messagingSenderId: "751438703089",
  appId: "1:751438703089:web:4bb85ff3051a336a817c50",   
  measurementId: "G-EB5WKKX21D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;