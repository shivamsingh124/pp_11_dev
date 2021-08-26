import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCPlBSZb_vl0nxbY5yEfDlFk9j6O_TAOQ",
  authDomain: "resume-builder-6af50.firebaseapp.com",
  projectId: "resume-builder-6af50",
  storageBucket: "resume-builder-6af50.appspot.com",
  messagingSenderId: "1046502013472",
  appId: "1:1046502013472:web:533eee7cd96e0966161a45"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();