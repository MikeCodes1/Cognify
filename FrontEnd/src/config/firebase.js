import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAXRLRgR8FUDcktaLYHsgg5OrvVtzTUhq8",
  authDomain: "cognify-c0678.firebaseapp.com",
  projectId: "cognify-c0678",
  storageBucket: "cognify-c0678.appspot.com",
  messagingSenderId: "80340697226",
  appId: "1:80340697226:web:eee7656148c8431ea8ad73",
  measurementId: "G-S6RGLDZNP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);