import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdV3G8UQTL3YG-BA7g2yhiJZRBX39oJXw",
  authDomain: "react-native-app2-9f8c2.firebaseapp.com",
  projectId: "react-native-app2-9f8c2",
  storageBucket: "react-native-app2-9f8c2.appspot.com",
  messagingSenderId: "361367960663",
  appId: "1:361367960663:web:4c322c57fe3bbfdba83712",
  measurementId: "G-10GX68T6VH",
};

const db = initializeApp(firebaseConfig);
const auth = getAuth(db);

export { auth };
