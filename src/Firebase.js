// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2mjoJGyzJlRzo_Gvx5LwUwNoiaOpnqH8",
    authDomain: "hotellamoure.firebaseapp.com",
    projectId: "hotellamoure",
    storageBucket: "hotellamoure.appspot.com",
    messagingSenderId: "830178776316",
    appId: "1:830178776316:web:439982b76d388727703379"
};

initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getFirestore();