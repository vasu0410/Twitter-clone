// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArP3-4cmIVw1RulnisJ3z3lvx0IX5xRFI",
    authDomain: "twitter-clone-a57b1.firebaseapp.com",
    projectId: "twitter-clone-a57b1",
    storageBucket: "twitter-clone-a57b1.appspot.com",
    messagingSenderId: "43133553015",
    appId: "1:43133553015:web:8fd634b38d215bda403972",
    measurementId: "G-KY9GP1TBRY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;