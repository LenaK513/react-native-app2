import firebase from "firebase";
// import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // apiKey: "API_KEY",
  // authDomain: "DOMAIN",
  // databaseURL: "URL",
  // projectId: "PROJECT_ID",
  // storageBucket: "STORAGE",
  // messagingSenderId: "SENDER_ID",
  // appId: "APP_ID",
  apiKey: "AIzaSyCdV3G8UQTL3YG-BA7g2yhiJZRBX39oJXw",
  authDomain: "react-native-app2-9f8c2.firebaseapp.com",
  projectId: "react-native-app2-9f8c2",
  storageBucket: "react-native-app2-9f8c2.appspot.com",
  messagingSenderId: "361367960663",
  appId: "1:361367960663:web:4c322c57fe3bbfdba83712",
  measurementId: "G-10GX68T6VH",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
