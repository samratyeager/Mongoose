import express from "express";
import connectDb from "./Connecting Database/db/connectdatabase.js";
const app = express();
const port = process.env.PORT || 8000;
const Database_Url = process.env.Database_Url || "mongodb://127.0.0.1:27017/animes"
connectDb(Database_Url);

app.listen(port, () => console.log("Server Up!"))