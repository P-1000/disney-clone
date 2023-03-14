import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getDatabase } from "firebase/database";
import 'firebase/compat/database'


const firebaseConfig = {
    apiKey: "AIzaSyAoTtiCHV8gBOyndE5nPLpxMz7fL_y3m6I",
    authDomain: "desneyplus-colne.firebaseapp.com",
    projectId: "desneyplus-colne",
    storageBucket: "desneyplus-colne.appspot.com",
    messagingSenderId: "194614601523",
    appId: "1:194614601523:web:8a3c55e2e9c91ffa42c046",
    measurementId: "G-XRGGLP10PK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const dataRef = firebase.database


  //// 👆👆👆👆 watchlist ////
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  
  export default db;