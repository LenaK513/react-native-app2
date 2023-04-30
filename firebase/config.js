import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqnVUtg43LpsUG3kMt9T7vptFpyM8bqdg",
  authDomain: "react-native-app2-f90d1.firebaseapp.com",
  projectId: "react-native-app2-f90d1",
  storageBucket: "react-native-app2-f90d1.appspot.com",
  messagingSenderId: "93824614199",
  appId: "1:93824614199:web:5ff0f14962700c5d3a24b2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore(app);

export { auth, storage, db };
