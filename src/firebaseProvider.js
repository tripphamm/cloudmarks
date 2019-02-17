import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const config = {
  apiKey: "AIzaSyD5HjS-WAwDRv3eD6POWH7SlFuBNqaUWYI",
  authDomain: "cloudmarks-x.firebaseapp.com",
  databaseURL: "https://cloudmarks-x.firebaseio.com",
  projectId: "cloudmarks-x",
  storageBucket: "cloudmarks-x.appspot.com",
  messagingSenderId: "632470885713"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
