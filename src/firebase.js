import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

// these are my original firebase details
const firebaseConfig = {
  apiKey: "AIzaSyD2lzQp1JDiaPYGcDba6WSK0BaIcYf6p-I",
  authDomain: "disneyplus-clone-dfdb8.firebaseapp.com",
  projectId: "disneyplus-clone-dfdb8",
  storageBucket: "disneyplus-clone-dfdb8.appspot.com",
  messagingSenderId: "57041229971",
  appId: "1:57041229971:web:efab545a1063c5b0e5d566",
  measurementId: "G-WP56LLCL9H"
};

// Cloned details, test mode
// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
