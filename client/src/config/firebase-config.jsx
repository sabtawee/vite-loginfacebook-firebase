import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHWmyqzkSc3EefswI64STNT-786P2VQr8",
  authDomain: "vite-auth-869bc.firebaseapp.com",
  projectId: "vite-auth-869bc",
  storageBucket: "vite-auth-869bc.appspot.com",
  messagingSenderId: "194456517747",
  appId: "1:194456517747:web:f74ea06fa0a6d3def6fe06"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
