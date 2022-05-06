import express from "express";
import connection from "./Database/DB.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config({ path: "./.env" });
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8000;

app.use("/", Router);

const server = app.listen(PORT, () => console.log(`Server started on ${PORT}`));

connection(URL);
