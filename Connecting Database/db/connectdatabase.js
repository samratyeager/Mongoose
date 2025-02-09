import mongoose from "mongoose";
const connectDb = async (Database_Url) => {
    try {
        await mongoose.connect(Database_Url);
        console.log("Database connected.........")

    } catch (error) {
        console.log(error);

    }
}

export default connectDb;