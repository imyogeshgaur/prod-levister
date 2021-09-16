import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAT86CoJ7GdeCJhyoHyNd3Ae2MYi4UeAP8",
  authDomain: "levister.firebaseapp.com",
  projectId: "levister",
  storageBucket: "levister.appspot.com",
  messagingSenderId: "994515680627",
  appId: "1:994515680627:web:8dbe8cc577c7b063281906"
};

const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();

export default database;
