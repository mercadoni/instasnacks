import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import {FIREBASE_KEY} from "./.env"

firebase.initializeApp({
  apiKey: FIREBASE_KEY,
  authDomain: "instasnacks-d325d.firebaseapp.com",
  projectId: "instasnacks-d325d"
});

let db = firebase.firestore();

export default db;
