// import firebase from "firebase/app";
//     const firebaseConfig = {
//     apiKey: "AIzaSyA7MJTwOc6PYmowsS2ruNnWGB6sNqkagRk",
//     authDomain: "shivam-reels.firebaseapp.com",
//     projectId: "shivam-reels",
//     storageBucket: "shivam-reels.appspot.com",
//     messagingSenderId: "644695350941",
//     appId: "1:644695350941:web:ca7aa4d62ebbb290e3be74"
//   };
//   // firebase.initializeApp(firebaseConfig)

import firebase from "firebase/app";
import config from "./config.json";
import "firebase/auth";

import "firebase/firestore";

firebase.initializeApp(config);

//flag => using google
let provider = new firebase.auth.GoogleAuthProvider();

//object jiske ander login/logout/signup
export const auth = firebase.auth();

export const signInWithGoogle = () => {
  //ki muje popup ko use krke sign up krna with google
  auth.signInWithPopup(provider);
};

export default firebase;