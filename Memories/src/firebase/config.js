import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeMx6_BR44qlN82t7JuvjiSh6a6a4ukyw",
  authDomain: "memories-us.firebaseapp.com",
  projectId: "memories-us",
  storageBucket: "memories-us.appspot.com",
  messagingSenderId: "158879158729",
  appId: "1:158879158729:web:c198f019661575ebbdd818"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //starts storage servive
const projectStorage = firebase.storage(); 

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp};

