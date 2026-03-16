// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCWhzriguZw7PtoXm7Or7RBpseFXZotuQ",
  authDomain: "cardiocare-ca96d.firebaseapp.com",
  projectId: "cardiocare-ca96d",
  storageBucket: "cardiocare-ca96d.firebasestorage.app",
  messagingSenderId: "656646494438",
  appId: "1:656646494438:web:c08d168126f8a5df2cc327",
  measurementId: "G-1QRFB3JFF6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);