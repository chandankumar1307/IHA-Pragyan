import express from "express";
//import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const expressApp = express();

expressApp.use(express.json());

expressApp.use(express.urlencoded({ extended: true }));

const firebaseConfig = {
  apiKey: "AIzaSyA7CFtGbOu9nuSub50ESIAbozuwc1C8Bi4",
  authDomain: "iha-pragyan.firebaseapp.com",
  projectId: "iha-pragyan",
  storageBucket: "iha-pragyan.appspot.com",
  messagingSenderId: "558985303812",
  appId: "1:558985303812:web:9dcb07bf0135f0d897a251",
  measurementId: "G-GFS076F277",
};

// admin.initializeApp({
//   credential: admin.credential.cert(firebaseConfig),
// });

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const user = {
  email: "email",
  password: "password",
};

expressApp.post("/signup", (req, res) => {
  user.email = req.body.email;
  user.password = req.body.password;

  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      res.json(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

const PORT = process.env.PORT || 8000;

expressApp.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
