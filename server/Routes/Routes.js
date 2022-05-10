import express from "express";
//import Test from "./Schema/test.js";
import { getTests } from "../Controller/test.js";
import { createTests } from "../Controller/test.js";

const Router = express.Router();

Router.post("/test", createTests);
Router.get("/get", getTests);

export default Router;
