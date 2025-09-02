// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs-hVWYQYVJla-7f27Xhe7Ou0IbyCs7IQ",
    authDomain: "trip-planner-a3b74.firebaseapp.com",
    projectId: "trip-planner-a3b74",
    storageBucket: "trip-planner-a3b74.firebasestorage.app",
    messagingSenderId: "1024046179830",
    appId: "1:1024046179830:web:403683535058627a5853d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)