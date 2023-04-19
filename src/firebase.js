// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoKCS_wfOAPFA_wv_hM7t-fYYSlJm31s4",
  authDomain: "my-todo-app-2152f.firebaseapp.com",
  projectId: "my-todo-app-2152f",
  storageBucket: "my-todo-app-2152f.appspot.com",
  messagingSenderId: "854065103248",
  appId: "1:854065103248:web:a0aeadb371f5ce69d43315",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
