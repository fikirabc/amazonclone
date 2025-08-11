import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firebase";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjF5jblc6Auqno36XwhfzbUXxLRTdWWtg",
  authDomain: "clone-2942f.firebaseapp.com",
  projectId: "clone-2942f",
  storageBucket: "clone-2942f.firebasestorage.app",
  messagingSenderId: "512592217319",
  appId: "1:512592217319:web:c6f320a2bfa3c2f1880e42",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
