import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7CFtGbOu9nuSub50ESIAbozuwc1C8Bi4",
  authDomain: "iha-pragyan.firebaseapp.com",
  projectId: "iha-pragyan",
  storageBucket: "iha-pragyan.appspot.com",
  messagingSenderId: "558985303812",
  appId: "1:558985303812:web:9dcb07bf0135f0d897a251",
  measurementId: "G-GFS076F277",
};

var authApp = initializeApp(firebaseConfig);
module.exports.authApp = authApp();
