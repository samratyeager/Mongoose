import express from "express";
import movieModel from "./Models/Movies.js";
import connectdbs from "./ConnectDb/db.js";
const app = express();
const port = 8000;
const Database_Url = process.env.Database_Url;

connectdbs(Database_Url);

app.listen(port, () => console.log("Server up........"));

