// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKJj5QAma_uGPluUBZT54TasLqzh_07D4",
  authDomain: "sj-fintech-157c2.firebaseapp.com",
  projectId: "sj-fintech-157c2",
  storageBucket: "sj-fintech-157c2.firebasestorage.app",
  messagingSenderId: "673670576947",
  appId: "1:673670576947:web:295a514a07b9330442dc46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
