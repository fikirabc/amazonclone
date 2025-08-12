import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjF5jblc6Auqno36XwhfzbUXxLRTdWWtg",
  authDomain: "clone-2942f.firebaseapp.com",
  projectId: "clone-2942f",
  storageBucket: "clone-2942f.appspot.com",
  messagingSenderId: "512592217319",
  appId: "1:512592217319:web:c6f320a2bfa3c2f1880e42",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export auth and firestore using compat syntax
export const auth = firebase.auth();
export const db = firebase.firestore();
