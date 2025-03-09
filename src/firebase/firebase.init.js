// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvGhuUJW5DHVDV2uQR2w-hen4ddzFR9n0",
  authDomain: "my-coffee-shp.firebaseapp.com",
  projectId: "my-coffee-shp",
  storageBucket: "my-coffee-shp.firebasestorage.app",
  messagingSenderId: "908518491790",
  appId: "1:908518491790:web:e941a5be32a0265756abdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);