import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGB6il1MD5WlEPmRSzBfxkgb-HgmCYDOw",
    authDomain: "notion-clone-app-2ab27.firebaseapp.com",
    databaseURL: "https://notion-clone-app-2ab27-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "notion-clone-app-2ab27",
    storageBucket: "notion-clone-app-2ab27.firebasestorage.app",
    messagingSenderId: "599914690739",
    appId: "1:599914690739:web:f8e089754d5d11ede898c6"
  };
  
  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export { db };