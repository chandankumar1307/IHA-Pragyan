import express from "express";
import connection from "./Database/DB.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import firebase from "firebase";

const app = express();
const firebaseConfig = {
  apiKey: "AIzaSyA7CFtGbOu9nuSub50ESIAbozuwc1C8Bi4",
  authDomain: "iha-pragyan.firebaseapp.com",
  projectId: "iha-pragyan",
  storageBucket: "iha-pragyan.appspot.com",
  messagingSenderId: "558985303812",
  appId: "1:558985303812:web:9dcb07bf0135f0d897a251",
  measurementId: "G-GFS076F277",
};

var authApp = firebase.initializeApp(firebaseConfig);
module.exports.authApp = authApp();
// dotenv.config({ path: "./.env" });
// app.use(cors());

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

//const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8000;

app.use("/", Router);

const server = app.listen(PORT, () => console.log(`Server started on ${PORT}`));

//connection(URL);
