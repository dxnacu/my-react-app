import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZfqHrBgneJ6NI9ffxMMtHjq85uS52tJg",
  authDomain: "my-web-project-3a555.firebaseapp.com",
  projectId: "my-web-project-3a555",
  storageBucket: "my-web-project-3a555.firebasestorage.app",
  messagingSenderId: "142596706237",
  appId: "1:142596706237:web:083b9f02ab5ed8aa544cd4",
  measurementId: "G-0L9986K8HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);