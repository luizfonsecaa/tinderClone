//Firebaaase app (the core Firebase SDK) is always required and
//must be listed firt
import Vue from 'vue'
import * as firebase from "firebase/app"

//Add the firebase products that you want to use
import "firebase/auth"
// import "firebase/database"
import "firebase/firestore"
import "firebase/storage"
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBkhGjUTGtex0v7hof1yr38tkUqTIXwprQ",
  authDomain: "hooked-aa3a5.firebaseapp.com",
  databaseURL: "https://hooked-aa3a5.firebaseio.com",
  projectId: "hooked-aa3a5",
  storageBucket: "hooked-aa3a5.appspot.com",
  messagingSenderId: "108465300888",
  appId: "1:108465300888:web:ce64fcca3aaf184cc077ed"

};
// Initialize Firebase
let firebaseApp  = firebase.initializeApp(firebaseConfig);
// let firebaseAuth = firebaseApp.auth()
// let firebaseDb   = firebaseApp.database()

Vue.prototype.$firebase = firebaseApp

