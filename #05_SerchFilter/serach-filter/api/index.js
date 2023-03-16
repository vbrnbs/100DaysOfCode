import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  res.json("hello")
});

app.listen(5000, () => console.log("API is working!"));
