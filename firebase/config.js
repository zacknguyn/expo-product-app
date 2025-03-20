import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKfqJYM_-N3-AuomdpsXeVeZ6VCQM6pFQ",
  authDomain: "phong-crud.firebaseapp.com",
  projectId: "phong-crud",
  storageBucket: "phong-crud.firebasestorage.app",
  messagingSenderId: "139685932795",
  appId: "1:139685932795:web:8eca03cd947097df1c0a5e",
  measurementId: "G-C615ZWYFHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
