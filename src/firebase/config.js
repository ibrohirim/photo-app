import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDTgmtx05uorba28elW5d0ZSNZLCt2tFcU",
    authDomain: "photo-app-6e269.firebaseapp.com",
    databaseURL: "https://photo-app-6e269.firebaseio.com",
    projectId: "photo-app-6e269",
    storageBucket: "photo-app-6e269.appspot.com",
    messagingSenderId: "908139565967",
    appId: "1:908139565967:web:124a5a772eac091cddb1fa"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

