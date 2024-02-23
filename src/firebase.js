import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAisIh8L09fYUY2ZWdbicEGxXD3ihebbjk",
  authDomain: "drag-drop-d3e32.firebaseapp.com",
  projectId: "drag-drop-d3e32",
  storageBucket: "drag-drop-d3e32.appspot.com",
  messagingSenderId: "268313867882",
  appId: "1:268313867882:web:7cbaba1e36fabf978dbc13"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);