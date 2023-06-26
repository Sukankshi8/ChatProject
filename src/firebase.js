import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyANTqVEbzT2SBfoHSdU19Ur8aSFdKADTzc",
  authDomain: "chat-project-4240d.firebaseapp.com",
  projectId: "chat-project-4240d",
  storageBucket: "chat-project-4240d.appspot.com",
  messagingSenderId: "369548394250",
  appId: "1:369548394250:web:743daf143906aa5cb9c4f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)
