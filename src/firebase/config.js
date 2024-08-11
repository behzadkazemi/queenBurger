const { initializeApp } = require("firebase/app");
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiHrPgs0fTzyBpEOs12TlzR6rtAip9IpE",
    authDomain: "queenburger-bk.firebaseapp.com",
    projectId: "queenburger-bk",
    storageBucket: "queenburger-bk.appspot.com",
    messagingSenderId: "893293825917",
    appId: "1:893293825917:web:2171de004ba6e4661d8614"
  };

  initializeApp(firebaseConfig)
  const db = getFirestore()
  export {db}