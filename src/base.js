import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdiHK2j2TGmA2wYFHhi-qIBRXv-rvEOJ0",
  authDomain: "dagk-e0fa0.firebaseapp.com",
  databaseURL: "https://dagk-e0fa0.firebaseio.com",
  projectId: "dagk-e0fa0",
  storageBucket: "dagk-e0fa0.appspot.com",
  messagingSenderId: "57600058312"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;