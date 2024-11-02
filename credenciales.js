// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBnBE51v4uqG05ogZ0ERth5bgz4PoVhW8",
  authDomain: "proyectoparcial-f82e6.firebaseapp.com",
  projectId: "proyectoparcial-f82e6",
  storageBucket: "proyectoparcial-f82e6.firebasestorage.app",
  messagingSenderId: "159812067592",
  appId: "1:159812067592:web:90c4083b7f92f11dae8cbd"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;