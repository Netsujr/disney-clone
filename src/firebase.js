// THIS FILE WAS CLONED NOT CREATED
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD2lzQp1JDiaPYGcDba6WSK0BaIcYf6p-I",
  authDomain: "disneyplus-clone-dfdb8.firebaseapp.com",
  projectId: "disneyplus-clone-dfdb8",
  storageBucket: "disneyplus-clone-dfdb8.appspot.com",
  messagingSenderId: "57041229971",
  appId: "1:57041229971:web:efab545a1063c5b0e5d566",
  measurementId: "G-WP56LLCL9H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
