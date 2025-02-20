import mongoose from "mongoose";

const connectDb = async (database_url)=> {

    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/animes');
        console.log("database connected............")
    }
    catch(error){
        console.log(error)
    }
}

export default connectDb;


























