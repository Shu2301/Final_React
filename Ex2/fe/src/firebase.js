import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDiwVDav9V6hUmjicpRDdkDCHZQkLPbrog",
  authDomain: "project-d92bf.firebaseapp.com",
  projectId: "project-d92bf",
  storageBucket: "project-d92bf.appspot.com",
  messagingSenderId: "780112909829",
  appId: "1:780112909829:web:f76973bc9b8d175c13ae6c",
  measurementId: "G-4LPTMXHNLW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, storage, provider}