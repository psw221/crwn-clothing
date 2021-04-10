import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBISjBZNl0uR0DydWtdI2IujELlKv1HUjw",
  authDomain: "crwn-db-686e3.firebaseapp.com",
  projectId: "crwn-db-686e3",
  storageBucket: "crwn-db-686e3.appspot.com",
  messagingSenderId: "694080973715",
  appId: "1:694080973715:web:b5932499b26d376609d666",
  measurementId: "G-TM9YB629CF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
