import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDc6VKN6bohAeSvrp-De4aE3RypO6F5-qc",
  authDomain: "crwn-db-2581b.firebaseapp.com",
  projectId: "crwn-db-2581b",
  storageBucket: "crwn-db-2581b.appspot.com",
  messagingSenderId: "1094847298612",
  appId: "1:1094847298612:web:00ad0ef177a852e0ecde61",
  measurementId: "G-SKXZM4PY42",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
