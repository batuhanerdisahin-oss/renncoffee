import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCH6LsZMqQIbPQBtrqybbxxC_1XSbtVSvk",
  authDomain: "renncoffee-fb206.firebaseapp.com",
  projectId: "renncoffee-fb206",
  storageBucket: "renncoffee-fb206.firebasestorage.app",
  messagingSenderId: "657971021701",
  appId: "1:657971021701:web:378a42ef9aabb180d2e6ec",
  measurementId: "G-3QG86DQ4ZB"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
