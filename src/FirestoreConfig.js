import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyA-tN1w5FMwrdVlgAFn5R3TdNnDyzubg2o",
  authDomain: "instasnacks-d325d.firebaseapp.com",
  projectId: "instasnacks-d325d"
});

let db = firebase.firestore();

export default db;
