// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYBSYIZe1f_B4pejMXou6k14RnIB3ZfV0",
    authDomain: "internationalsoftware-aaad6.firebaseapp.com",
    projectId: "internationalsoftware-aaad6",
    storageBucket: "internationalsoftware-aaad6.appspot.com",
    messagingSenderId: "481532274299",
    appId: "1:481532274299:web:22bf73fc3c19ccb65164de",
    measurementId: "G-740109WBFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
