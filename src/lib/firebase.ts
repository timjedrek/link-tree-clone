import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
import { writable } from "svelte/store";

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
//export const analytics = getAnalytics(app);
// ANALYTICS threw a reference window error.. check out https://joyofcode.xyz/sveltekit-google-analytics

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();