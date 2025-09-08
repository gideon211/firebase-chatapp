// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHf4K9Bx2bszawYrygotqWYuEl7LtMu9k",
  authDomain: "chat-af449.firebaseapp.com",
  projectId: "chat-af449",
  storageBucket: "chat-af449.firebasestorage.app",
  messagingSenderId: "658752982643",
  appId: "1:658752982643:web:e615add9d4f0d66f0e2406"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);