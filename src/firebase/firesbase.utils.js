import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDoLJoRDwOsx13lypI-3CLwyY1HTXKa_OI",
  authDomain: "udemy-react-db.firebaseapp.com",
  projectId: "udemy-react-db",
  storageBucket: "udemy-react-db.appspot.com",
  messagingSenderId: "149230014355",
  appId: "1:149230014355:web:84b4d7a91ee9542e87a266",
  measurementId: "G-NBMX76JXKC",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
