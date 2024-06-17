// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt8BO-_fdOIGFDaQiA6BB2JWj5g5WREXw",
  authDomain: "upload-file-to-db.firebaseapp.com",
  projectId: "upload-file-to-db",
  storageBucket: "upload-file-to-db.appspot.com",
  messagingSenderId: "276825054271",
  appId: "1:276825054271:web:d2c9a4b3d84dc3c94c6c8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
