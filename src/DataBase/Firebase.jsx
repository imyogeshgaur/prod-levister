import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAykH8L6TMHPmAHMh2Skczt6EWxCuriYvM",
  authDomain: "levister-4eed2.firebaseapp.com",
  projectId: "levister-4eed2",
  storageBucket: "levister-4eed2.appspot.com",
  messagingSenderId: "8273578718",
  appId: "1:8273578718:web:f62ae4988fac5068a3904f"
};

const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();

export default database;
