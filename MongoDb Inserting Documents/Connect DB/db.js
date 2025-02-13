import mongoose from "mongoose";

const connectDb = async (database_url)=> {

    try{
        await mongoose.connect(database_url);
        console.log("database connected............")
    }
    catch(error){
        console.log(error)
    }
}

export default connectDb;


























