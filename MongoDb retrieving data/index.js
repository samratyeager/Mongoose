import express from "express";
import connectDb from "./Connect DB/db.js";

//for inserting one document to mongodb.............
// import { createDoc } from "./Models/Movies.js";
//for inserting one document to mongodb.............
import {docbysearch } from "./Models/Movies.js";


import dotenv from "dotenv";  // Import dotenv

dotenv.config();  // Load environment variables

const app = express();

const port = process.env.PORT;  
const database_url = process.env.DATABASE_URL;  

connectDb(database_url);


docbysearch();

app.listen(port, () => console.log(`Server running on port ${port}...`));


