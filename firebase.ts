// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmpdx3dpR1J5EWodBFf2Oo5IGs6cyxJMc",
  authDomain: "smartnote-project.firebaseapp.com",
  projectId: "smartnote-project",
  storageBucket: "smartnote-project.appspot.com",
  messagingSenderId: "97688623301",
  appId: "1:97688623301:web:82d4404b86c6e803e078ac"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db};