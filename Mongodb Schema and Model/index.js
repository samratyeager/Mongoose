import express from "express";
import connectDb from "./Connect DB/db.js";
import movieModel from "./Models/Movies.js";
import dotenv from "dotenv";  // Import dotenv

dotenv.config();  // Load environment variables

const app = express();

const port = process.env.PORT
const database_url = process.env.DATABASE_URL; 

connectDb(database_url);

app.listen(port, () => console.log(`Server running on port ${port}...`));
