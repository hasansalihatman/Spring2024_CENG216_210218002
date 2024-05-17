import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl11q97Lk1SaF4isY_T9ntVSGiPcK8OFo",
  authDomain: "instant-messaging-app-ceng216.firebaseapp.com",
  projectId: "instant-messaging-app-ceng216",
  storageBucket: "instant-messaging-app-ceng216.appspot.com",
  messagingSenderId: "164953331302",
  appId: "1:164953331302:web:27156bb08947237dfe3fa7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
