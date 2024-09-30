
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { getFirestore,doc,setDoc } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore/lite";
// import { doc } from "firebase/firestore";
import { doc } from "firebase/firestore/lite";
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_tGlMnLndqfZQKSNHSPELjlVhlL4gQtQ",
  authDomain: "login-page-be509.firebaseapp.com",
  projectId: "login-page-be509",
  storageBucket: "login-page-be509.appspot.com",
  messagingSenderId: "703287397878",
  appId: "1:703287397878:web:fa87f347d02ad8ba6e4bd7",
  measurementId: "G-CLZ4NCH9SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, db, storage ,provider,doc};