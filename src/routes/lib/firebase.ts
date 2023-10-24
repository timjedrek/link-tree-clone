import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyTEB9Yy2-o_DUYctaVe687hccCSSssSw",
  authDomain: "link-tree-clone-91ec4.firebaseapp.com",
  projectId: "link-tree-clone-91ec4",
  storageBucket: "link-tree-clone-91ec4.appspot.com",
  messagingSenderId: "382555681616",
  appId: "1:382555681616:web:0e7ca4d6397e862730b255",
  measurementId: "G-CYSYY0GZ1X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export const analytics = getAnalytics(app);