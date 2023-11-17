import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAdufvUeNtwLEQFDERLO_GGXvQzcs79sy4",
    authDomain: "e-ride-stage4-be2a7.firebaseapp.com",
    projectId: "e-ride-stage4-be2a7",
    storageBucket: "e-ride-stage4-be2a7.appspot.com",
    messagingSenderId: "783640650181",
    appId: "1:783640650181:web:496ddb7c476422e5862bac"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
