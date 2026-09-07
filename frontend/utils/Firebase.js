import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zenvialogin-730fe.firebaseapp.com",
  projectId: "zenvialogin-730fe",
  storageBucket: "zenvialogin-730fe.firebasestorage.app",
  messagingSenderId: "672696693876",
  appId: "1:672696693876:web:02dbae69fd99f9632ccd21"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider}