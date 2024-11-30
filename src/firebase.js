
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
  apiKey: "",
  authDomain: "",
  projectId: "9",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, db, storage ,provider,doc};
