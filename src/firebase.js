import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0HwFsjWHjOBtDH6WgUc2g9M1UlB1kHpw",
    authDomain: "clone-95c38.firebaseapp.com",
    projectId: "clone-95c38",
    storageBucket: "clone-95c38.appspot.com",
    messagingSenderId: "797714183999",
    appId: "1:797714183999:web:059843ffe3fec47cc6058a",
    measurementId: "G-WW0LJVXZFH"
    
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};