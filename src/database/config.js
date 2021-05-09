import firebase from "firebase/app";
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAk0Xyt-Ktni65fgseWpw-tgs1bVvyGUU8",
    authDomain: "photowall-a0090.firebaseapp.com",
    databaseURL: "https://photowall-a0090-default-rtdb.firebaseio.com",
    projectId: "photowall-a0090",
    storageBucket: "photowall-a0090.appspot.com",
    messagingSenderId: "1091153068616",
    appId: "1:1091153068616:web:567dc205e22eea225c0e7d"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {database}; 