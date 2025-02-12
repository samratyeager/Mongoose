import mongoose from "mongoose";
const connectDbs = async (Database_Url) => {
    try {
        await mongoose.connect(Database_Url);
        console.log("Database connected.........")

    } catch (error) {
        console.log(error);

    }
}

export default connectDbs;