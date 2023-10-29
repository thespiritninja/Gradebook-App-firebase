// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firebaseAPIKEY,
  authDomain: "gradebook-app-firebase.firebaseapp.com",
  projectId: "gradebook-app-firebase",
  storageBucket: "gradebook-app-firebase.appspot.com",
  messagingSenderId: "923057474162",
  appId: "1:923057474162:web:2548fb67a495f7718490eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
export { app, db };
